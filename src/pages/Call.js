import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { Grid, Typography, Box, Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import withAuth from '../utils/withAuth';
import MeetCard from '../components/MeetItem';
import { TiMicrophone } from 'react-icons/ti';
import { FaCamera } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';
import { BsFillMicMuteFill } from 'react-icons/bs';
import { RiCameraOffFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Participant from '../components/Participant';
import QR from '../components/QR';
import Clock from 'react-live-clock';
import Search from '../components/Participant/search';
import SERVER from '../config';
const styles = {
    MeetCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 450,
        height: 270,
        mt: 3,
        position: 'relative',
    },
    singleCenter: {
        display: 'grid',
        placeItems: 'center',
        borderRadius: 3,
    },
};
const JoinCall = () => {
    const { id } = useParams();
    const [mic, setMic] = useState(true);
    const [camera, setCamera] = useState(true);
    const [active, setActive] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const [peers, setPeers] = useState([]);
    const localVideo = useRef(null);
    const socket = useRef();
    const peersRef = useRef([]);
    const roomID = id;
    const navigate = useNavigate();

    // get user
    const [user] = useAuthState(auth);
    const [search, setSearch] = useState('');
    useEffect(() => {
        socket.current = io.connect(SERVER);
        if (user)
            navigator.mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    setLocalStream(stream);
                    localVideo.current.srcObject = stream;
                    socket.current.emit('join room', {
                        roomID,
                        user: user
                            ? {
                                  uid: user?.uid,
                                  email: user?.email,
                                  name: user?.displayName,
                                  photoURL: user?.photoURL,
                              }
                            : null,
                    });
                    socket.current.on('all users', (users) => {
                        const peers = [];
                        users.forEach((user) => {
                            const peer = createPeer(user.userId, socket.current.id, stream);
                            peersRef.current.push({
                                peerID: user.userId,
                                peer,
                                user: user.user,
                            });
                            peers.push({
                                peerID: user.userId,
                                peer,
                                user: user.user,
                            });
                        });
                        setPeers(peers);
                    });
                    // listen for change in video permissions
                    socket.current.on('video permission', (payload) => {
                        console.log(payload);
                    });

                    // user joined listener
                    socket.current.on('user joined', (payload) => {
                        // console.log(payload);
                        const peer = addPeer(payload.signal, payload.callerID, stream);
                        peersRef.current.push({
                            peerID: payload.callerID,
                            peer,
                            user: payload.user,
                        });

                        const peerObj = {
                            peerID: payload.callerID,
                            peer,
                            user: payload.user,
                        };

                        setPeers((users) => [...users, peerObj]);
                    });

                    socket.current.on('receiving returned signal', (payload) => {
                        const item = peersRef.current.find((p) => p.peerID === payload.id);
                        item.peer.signal(payload.signal);
                    });

                    socket.current.on('user left', (id) => {
                        const peerObj = peersRef.current.find((p) => p.peerID === id);
                        if (peerObj) peerObj.peer.destroy();
                        const peers = peersRef.current.filter((p) => p.peerID !== id);
                        peersRef.current = peers;
                        setPeers((users) => users.filter((p) => p.peerID !== id));
                    });
                });
        // eslint-disable-next-line
    }, [user, roomID]);

    const filteredPeers = (peers) =>
        peers.filter((peer) => peer.user.name.toLowerCase().includes(search.toLowerCase()));
    const createPeer = (userToSignal, callerID, stream) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });
        peer.on('signal', (signal) => {
            socket.current.emit('sending signal', {
                userToSignal,
                callerID,
                signal,
                user: user
                    ? {
                          uid: user?.uid,
                          email: user?.email,
                          name: user?.displayName,
                          photoURL: user?.photoURL,
                      }
                    : null,
            });
        });
        return peer;
    };

    const addPeer = (incomingSignal, callerID, stream) => {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        });
        peer.on('signal', (signal) => {
            socket.current.emit('returning signal', { signal, callerID });
        });
        peer.signal(incomingSignal);
        return peer;
    };

    const handleMic = () => {
        setMic(!mic);
        const audio = localVideo.current.srcObject.getAudioTracks()[0];
        if (mic) {
            audio.enabled = false;
            setMic(false);
        }
        if (!mic) {
            audio.enabled = true;
            setMic(true);
        }
    };
    const handleCamera = () => {
        setCamera(!camera);
        const videoTrack = localStream.getTracks().find((track) => track.kind === 'video');
        if (active) {
            videoTrack.enabled = false;
        } else {
            videoTrack.enabled = true;
            // enable web cam
        }
        setActive(!active);
        socket.current.emit('video permission', {
            video: videoTrack.enabled,
            user: user
                ? {
                      uid: user?.uid,
                      email: user?.email,
                      name: user?.displayName,
                      photoURL: user?.photoURL,
                  }
                : null,
        });
    };

    const handleEnd = () => {
        // navigate to home
        navigate('/');
        window.location.reload();
    };

    const handleSearch = (e) => {
        console.log(e.target.value);
        e.preventDefault();
        setSearch(e.target.value);
        // filter peers
    };
    return (
        <Grid container  columns={12} sx={{ minHeight: '100vh' }}>
            {/**
             * @Users video
             * @only MEET CARD GRIDS
             */}
            <Grid
                item
                xs={12}
                md={9}
                lg={9}
                className="video-grid"
                sx={{ height: '90vh', padding: 3, overflow: 'auto' }}
            >
                <Box sx={styles.MeetCard}>
                     <video
                        muted
                        playsInline
                        autoPlay
                        controls={false}
                        ref={localVideo}
                        className="object-cover rounded-lg"
                        style={{ width: styles.MeetCard.width, height: styles.MeetCard.height }}
                    />
                    {!active && (
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                backgroundColor: '#303030',
                                ...styles.singleCenter,
                            }}
                        >
                            <img
                                className="h-[35%] max-h-[150px] w-auto rounded-full aspect-square object-cover"
                                src={
                                    user?.photoURL ||
                                    'https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png'
                                }
                                alt={user?.name}
                            />
                        </Box>
                    )}

                    <Typography variant="body1" className="absolute bottom-4 left-4">
                        {user?.displayName}
                    </Typography>
                </Box>

                {peers.map((peer) => (
                    // console.log(peer),
                    <MeetCard key={peer?.peerID} user={peer.user} peer={peer?.peer} />
                ))}
            </Grid>

            <Grid item xs={12} md={3} lg={3}  >
                <Grid container columns={12}>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        className="lightGrayBorder"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '90vh',
                            overflow: 'auto',

                            // hide scroll bar
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }}
                    >
                        <Typography variant="h6" className="mt-4" sx={{ mb: 3 }}>
                            Participants {1 + peers.length}
                        </Typography>
                        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
                        <Participant user={user} you={true} />
                        {filteredPeers(peers).map((peer) => (
                            <Participant user={peer} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container columns={12}>
                <Grid item xs={2} md={2} lg={2} className="h-16 flex items-center justify-center">
                    <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
                        <Clock format={'HH:mm:ss'} ticking={true} />
                    </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={8} className="h-16 control-panel">
                    <Button variant="outlined" sx={{ borderRadius: 20 }} onClick={handleMic}>
                        {mic ? (
                            <TiMicrophone size={30} color="#b1e1fc" />
                        ) : (
                            <BsFillMicMuteFill size={30} color="#a3a3a3" />
                        )}
                    </Button>
                    <Button variant="outlined" sx={{ borderRadius: 20 }} onClick={handleCamera}>
                        {camera ? (
                            <FaCamera size={30} color="#b1e1fc" onClick={handleCamera} />
                        ) : (
                            <RiCameraOffFill size={30} color="gray" />
                        )}
                    </Button>
                    <Button variant="outlined" sx={{ borderRadius: 20 }} onClick={handleEnd}>
                        {' '}
                        <MdCallEnd size={35} color="red" />
                    </Button>
                    <QR url={window.location.href} />
                </Grid>
            </Grid>
            <Grid item xs={2} md={2} lg={2}></Grid>
        </Grid>
    );
};
export default withAuth(JoinCall);

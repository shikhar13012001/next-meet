import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsFillShareFill } from 'react-icons/bs';
import QR from 'react-qr-code';
import { WhatsappShareButton, TwitterShareButton } from 'react-share';
import Copy from '../Copy';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    color: 'black',
};

export default function BasicModal({ url }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <BsFillShareFill size={24} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your meeting is ready
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Copy and share the URL with your members
                    </Typography>
                    <Copy url={url} />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="body1">
                        Share this QR to let other team members join
                    </Typography>
                    {/**
                     * SHOW QR
                     */}
                    <Box
                        sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}
                    >
                        <QR value={url} />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
                        Share on
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            mt: 3,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <WhatsappShareButton url={url}>
                            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp" />
                        </WhatsappShareButton>
                        <TwitterShareButton url={url}>
                            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" />
                        </TwitterShareButton>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

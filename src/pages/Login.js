import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { continueWithGoogle, signIn } from '../features/hackathon/hackathonSlice';
import { useDispatch } from 'react-redux';
import withoutAuth from '../utils/withoutAuth';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnClickGoogle = async () => {
        await dispatch(continueWithGoogle());
    };

    const handleOnClickLogin = async () => {
        await dispatch(signIn({ email, password }));
    };

    return (
        <section className="w-full h-screen">
            <div className="p-8 h-full">
                <div className="max-w-[700px] m-auto h-full flex flex-col items-center justify-between">
                    {/* Top three lines */}
                    <div className="w-full">
                        <p className="font-bold text-4xl">Let's sign you in.</p>
                        <div className="mt-5">
                            <p className="my-2 text-3xl">Welcome back.</p>
                            <p className="my-2 text-3xl">You've been missed!</p>
                        </div>
                    </div>
                    {/* Login form */}
                    <form className="flex flex-col gap-4 items-center w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-xl mt-2">Or continue with</p>
                            <div
                                className="bg-zinc-800 py-3 px-4 rounded-xl border-solid border-2 border-zinc-700 mt-3 cursor-pointer"
                                onClick={handleOnClickGoogle}
                            >
                                <FcGoogle size={25} />
                            </div>
                        </div>
                    </form>
                    {/* Login button */}
                    <div className="w-full text-center">
                        <p>
                            Don't have an account?{' '}
                            <button className="font-bold" onClick={() => navigate('/register')}>
                                Register
                            </button>
                        </p>
                        <button
                            className="bg-white text-black w-full mt-4 font-bold p-4 rounded-2xl"
                            onClick={handleOnClickLogin}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default withoutAuth(Login);

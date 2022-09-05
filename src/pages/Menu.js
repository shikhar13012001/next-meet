import { MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CloseMenuIcon from '../components/CloseMenuIcon';
import { onLogout } from '../features/hackathon/hackathonSlice';

const Menu = () => {
    const dispatch = useDispatch();
    const { userName } = useSelector((state) => state.hackathon);

    return (
        <section className="w-full h-screen">
            <div className="p-8 h-full">
                <div className="max-w-[700px] m-auto h-full flex flex-col items-center justify-between">
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full">
                            <p className="font-bold text-4xl">Hi {userName}.</p>
                            <CloseMenuIcon />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 text-md w-full">
                        <button
                            className="flex items-center justify-center bg-neutral-300 text-black w-full font-bold p-4 rounded-2xl hover:bg-white duration-300"
                            onClick={() => dispatch(onLogout())}
                        >
                            <MdLogout className="mr-4" />
                            <p>Sign Out</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Menu;

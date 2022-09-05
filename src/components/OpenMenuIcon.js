import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../features/flipr/fliprSlice';
import { MdLogout } from 'react-icons/md';
import { onLogout } from '../features/flipr/fliprSlice';

const OpenMenuIcon = () => {
    const dispatch = useDispatch();

    return (
        <>
            <FaBars className="lg:hidden cursor-pointer" onClick={() => dispatch(toggleMenu())} size={16} />
            <div className="hidden lg:flex">
                <div className="flex items-center justify-center gap-8">
                    <MdLogout size={25} onClick={() => dispatch(onLogout())} className="cursor-pointer" />
                </div>
            </div>
        </>
    );
};
export default OpenMenuIcon;

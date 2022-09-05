import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../features/hackathon/hackathonSlice';

const CloseMenuIcon = () => {
    const dispatch = useDispatch();

    return <FaTimes className="lg:hidden cursor-pointer" onClick={() => dispatch(toggleMenu())} size={16} />;
};
export default CloseMenuIcon;

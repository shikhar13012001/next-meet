import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <ClipLoader color="white" size={70} />
        </div>
    );
};
export default Loading;

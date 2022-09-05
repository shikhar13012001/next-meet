import ReactCopyToClipboardUI from 'react-copy-to-clipboard-ui';
const MyComponent = ({ url }) => {
    return (
        <ReactCopyToClipboardUI
            containerStyle={{
                backgroundColor: '#b1e1fc',
                marginTop: '10px',
                padding: '10px',

            }}
            textStyle={{
                breakWord: 'break-all',
                color: 'black',
                fontWeight: 'bold',
            }}
            text={url}
        >
            {url}
        </ReactCopyToClipboardUI>
    );
};

export default MyComponent;

import ReactCopyToClipboardUI from 'react-copy-to-clipboard-ui';
const MyComponent = ({ url }) => {
    return (
        <ReactCopyToClipboardUI
            containerStyle={{
                backgroundColor: '#b1e1fc',
                marginTop: '10px',
                padding: '10px', // or any other css property
                width: '100%',
            }}
            textStyle={{ 
                color: 'black',
                fontWeight: 'bold',
                textOverflow: 'ellipsis', 
                width: '100%',
            }}
        >
           {url}
        </ReactCopyToClipboardUI>
    );
};

export default MyComponent;

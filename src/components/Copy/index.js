import ReactCopyToClipboardUI from 'react-copy-to-clipboard-ui';
 const  MyComponent = ({url}) => {
   return <ReactCopyToClipboardUI containerStyle={{
    backgroundColor: '#b1e1fc',
    marginTop: '10px',
    padding: '10px',
    
   }}
   textStyle={{
    color: 'black', 
    fontWeight:"bold"
   }}
   text={url}
   
   >
    
    {url}
    </ReactCopyToClipboardUI>
}
 

export default MyComponent;
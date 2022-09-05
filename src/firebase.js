import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCyl7y0CmkXLoL4cBukdpidsrn-ifOCQxs',
    authDomain: 'my-app-122a3.firebaseapp.com',
    projectId: 'my-app-122a3',
    storageBucket: 'my-app-122a3.appspot.com',
    messagingSenderId: '457614454936',
    appId: '1:457614454936:web:0a11ba36dd1ce9c0c860ed',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

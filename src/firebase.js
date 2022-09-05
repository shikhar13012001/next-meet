import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyCs3-TRsH1EP7T00LIX_gcS_XpXwHtTIXU',
    authDomain: 'flipr-68e3f.firebaseapp.com',
    projectId: 'flipr-68e3f',
    storageBucket: 'flipr-68e3f.appspot.com',
    messagingSenderId: '612197580675',
    appId: '1:612197580675:web:7ab5b999e09838b94500b6',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';
import {
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';

const userName = localStorage.getItem('userName');
const token = localStorage.getItem('token');

const initialState = {
    isLoggedIn: token ? true : false,
    userName: userName || '',
    token: token || '',
    isLoading: false,
    isError: false,
    errorMsg: '',
    isMenuOpen: false,
};

export const continueWithGoogle = createAsyncThunk('hackathon/continueWithGoogle', async (thunkAPI) => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        await signInWithPopup(auth, provider);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const signUp = createAsyncThunk('hackathon/signUp', async ({ name, email, password }, thunkAPI) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = response;
        await updateProfile(user, {
            displayName: name,
        });
        return name;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const signIn = createAsyncThunk('hackathon/signIn', async ({ email, password }, thunkAPI) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user.displayName;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const onLogout = createAsyncThunk('hackathon/onLogout', async () => {
    await auth.signOut();
});

const hackathonSlice = createSlice({
    name: 'hackathon',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
    extraReducers: {
        [continueWithGoogle.fulfilled]: (state) => {
            state.isLoggedIn = true;
            state.token = auth.currentUser.uid;
            state.userName = auth.currentUser.displayName.split(' ')[0];
            state.isLoading = false;
            state.isError = false;
            state.errorMsg = '';
            localStorage.setItem('userName', auth.currentUser.displayName.split(' ')[0]);
            localStorage.setItem('token', auth.currentUser.uid);
        },
        [continueWithGoogle.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [continueWithGoogle.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMsg = payload;
        },

        [signUp.fulfilled]: (state, { payload }) => {
            state.isLoggedIn = true;
            state.token = auth.currentUser.uid;
            state.userName = payload.split(' ')[0];
            state.isLoading = false;
            state.isError = false;
            state.errorMsg = '';
            localStorage.setItem('userName', payload.split(' ')[0]);
            localStorage.setItem('token', auth.currentUser.uid);
        },
        [signUp.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [signUp.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMsg = payload;
        },

        [signIn.fulfilled]: (state, { payload }) => {
            state.isLoggedIn = true;
            state.token = auth.currentUser.uid;
            state.userName = payload.split(' ')[0];
            state.isLoading = false;
            state.isError = false;
            state.errorMsg = '';
            localStorage.setItem('userName', payload.split(' ')[0]);
            localStorage.setItem('token', auth.currentUser.uid);
        },
        [signIn.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [signIn.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMsg = payload;
        },

        [onLogout.fulfilled]: (state) => {
            state.isLoggedIn = false;
            state.token = '';
            state.userName = '';
            state.isError = false;
            state.isLoading = false;
            state.errorMsg = '';
            state.isMenuOpen = false;
            localStorage.removeItem('userName');
            localStorage.removeItem('token');
        },
        [onLogout.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [onLogout.rejected]: (state, { payload }) => {
            state.isError = true;
            state.isError = true;
            state.errorMsg = payload;
        },
    },
});

export const { toggleMenu } = hackathonSlice.actions;

export default hackathonSlice.reducer;

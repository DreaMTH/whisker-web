import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser, userLogin} from "@/lib/controllers/UserController";


export declare type authState = {
    status: string,
    user: IUser | null,
    token: string | null,
}

interface payloadType {
    email: string,
    password: string,
}

const initialState: authState = {
    status: 'loading',
    user: null,
    token: null,
}
export const authUser = createAsyncThunk('', async (loginInfo: payloadType) => {
    const data = await userLogin(loginInfo);
    if (!data?.user || !data?.token) {
        alert('Email or password invalid');
        return {user: null, token: null};
    }
    console.log("I am about to return user");
    return data;
});
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(authUser.pending, (state, action) => {
                state.status = 'loading';
                state.user = null;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(authUser.rejected, (state, action) => {
                state.status = 'error';
                state.user = null;
            })
    }
});
export const {logOut} = authSlice.actions;
export const isAuth = (state: authState) => Boolean(state.user);
export default authSlice.reducer;
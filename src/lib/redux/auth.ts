import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser, userLogin} from "@/lib/controllers/UserController";


type authState = {
    status: string,
    user: IUser | null,
}

interface payloadType {
    email: string,
    password: string,
}

const initialState: authState = {
    status: 'loading',
    user: null,
}
export const authUser = createAsyncThunk('', async (loginInfo: payloadType) => {
    console.log('I am in auth user');
    const user = await userLogin(loginInfo);
    if (!user) {
        alert('Email or password invalid');
        return null;
    }
    console.log("I am about to return user");
    return user;
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
                state.user = action.payload;
            })
            .addCase(authUser.rejected, (state, action) => {
                state.status = 'error';
                state.user = null;
            })
    }
});
export const {logOut} = authSlice.actions;
export default authSlice.reducer;
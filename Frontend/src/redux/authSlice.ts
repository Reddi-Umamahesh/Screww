import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/Interfaces/user"; 


interface AuthState {
  loading: boolean;
  user: IUser | null;
}


const initialState: AuthState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
});


export const { setLoading, setUser } = authSlice.actions;


export default authSlice.reducer;

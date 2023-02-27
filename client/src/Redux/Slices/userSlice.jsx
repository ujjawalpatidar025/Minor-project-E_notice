import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading:false,
  loginSuccess:false,
  loginError:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isloading: (state) => {
      state.loading=true
    },
    isLoginSuccess: (state, action) => {
      state.loginSuccess=true;
      state.loading=false;
      state.loginError=false;
      state.currentUser = action.payload;
    },
    isLoginError: (state) => {
      state.loginError=true;
      state.loginSuccess=false;
      state.currentUser = null;
      state.loading=false;

    },
    isLogout:(state)=>{
       state.currentUser=null;
       state.loading=false;
       state.loginSuccess=false;
       state.loginError=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { isloading, isLoginSuccess, isLoginError, isLogout } = userSlice.actions;

export default userSlice.reducer;
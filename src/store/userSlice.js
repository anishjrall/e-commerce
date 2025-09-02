import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  user: null,     
  isLoggedIn: false,
  users: [],      
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      
      const exists = state.users.find(u => u.username === action.payload.username);
      if (!exists) {
        state.users.push(action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
      } else {
        alert("Username already exists!");
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const foundUser = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (foundUser) {
        state.user = foundUser;
        state.isLoggedIn = true;
      } else {
        state.user = null;
        state.isLoggedIn = false;
        toast.error("Invalid username or password!");
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;

import {
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ISessionState {
  username: string;
  isLoggedIn: boolean;
}

interface ISessionAction {
  userId: string;
  username: string;
}

const initialSessionState: ISessionState = {
  username: "",
  isLoggedIn: false,
};


export const Session = createSlice({
  name: "Session",
  initialState: initialSessionState,
  reducers: {
    login(state) {
      return { ...state, isLoggedIn: true };
    },
    logout(state) {
      return { ...state, isLoggedIn: false };
    },
    setUsername(state, action: PayloadAction<ISessionAction>) {
      return { ...state, userId: action.payload.userId, username: action.payload.username };
    },
  },
});


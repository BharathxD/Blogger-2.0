import { PayloadAction, configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ISessionState {
  username: string;
  isLoggedIn: boolean;
}

interface ISessionAction {
  username: string;
}

const initialSessionState: ISessionState = {
  username: "",
  isLoggedIn: false,
};

const Session = createSlice({
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
      return { ...state, username: action.payload.username };
    },
  },
});

const store = configureStore({
  reducer: {
    Session: Session.reducer,
  },
});

export default store;
export const { login, logout, setUsername } = Session.actions;
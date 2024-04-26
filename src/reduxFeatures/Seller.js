import { createSlice } from "@reduxjs/toolkit";

const currentSeller = JSON.parse(localStorage.getItem("seller"));
console.log("currentSeller", currentSeller);

const initialStateValue = { ...currentSeller };

console.log("initialStateValue", initialStateValue);

export const sellerSlice = createSlice({
  name: "seller",
  initialState: initialStateValue,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    setUser: (state, action) => {
      console.log("inside reducer", action.payload);
      state = action.payload;
      console.log("seller", state);
    },
    signout: (state) => {
      state.value = localStorage.clear();
    },
  },
});

export const { login, signout, setUser } = sellerSlice.actions;
export default sellerSlice.reducer;

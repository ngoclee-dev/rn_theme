import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface AppSliceState {
  firstBoot: boolean;
}

const initialValue: AppSliceState = {
  firstBoot: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialValue,
  reducers: {
    setFirstBootState(state, action) {
      state.firstBoot = action.payload;
    },
  },
  extraReducers: builder => {

  },
});

export const {
  setFirstBootState,
} = appSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { getRandomWords } from "../data/functions";

const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    data: getRandomWords(),
    isFinish: false,
    trues: 0,
    falses: 0,
    completed: 0,
    time: 60,
  },
  reducers: {
    setProcess(state, action) {
      const index = action.payload.index;
      state.data[index].process = action.payload.process;
    },
    finish(state) {
      state.isFinish = true;
    },
    addTrue(state) {
      state.trues += 1;
    },
    addFalse(state) {
      state.falses += 1;
    },
  },
});

export const { setProcess, finish, addTrue, addFalse } =
  typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;

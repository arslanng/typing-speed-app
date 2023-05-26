import { createSlice } from "@reduxjs/toolkit";
import { getRandomWords } from "../data/functions";

const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    data: getRandomWords(),
    isFinish: false,
    isStart: false,
    trues: 0,
    falses: 0,
    time: 60,
    lang: "turkish",
    index: 0,
    fontSize: "small",
  },
  reducers: {
    setProcess(state, action) {
      const index = action.payload.index;
      state.data[index].process = action.payload.process;
    },
    finish(state) {
      state.isFinish = true;
      state.isStart = false;
    },
    addTrue(state) {
      state.trues += 1;
    },
    addFalse(state) {
      state.falses += 1;
    },
    setTime(state) {
      if (state.time > 0) {
        state.time -= 1;
      } else {
        state.isFinish = true;
      }
    },
    restart(state) {
      state.data = getRandomWords();
      state.isFinish = false;
      state.isStart = false;
      state.trues = 0;
      state.falses = 0;
      state.time = 60;
      state.index = 0;
    },
    setLang(state, action) {
      state.lang = action.payload;
    },
    start(state) {
      state.isStart = true;
    },
    setIndex(state) {
      state.index += 1;
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
  },
});

export const {
  setProcess,
  finish,
  addTrue,
  addFalse,
  setTime,
  restart,
  setLang,
  start,
  setIndex,
  setFontSize,
} = typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;

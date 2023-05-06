import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  questions: [],
};

const FaqReducer = createSlice({
  name: "FaqReducer",
  initialState,
  reducers: {
    SET_FAQ: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export default FaqReducer.reducer;
export const { SET_FAQ } = FaqReducer.actions;

function getShowFrequentlyAskedQuestions() {
  const questions = useSelector((state) => {
    state.faq.questions;
  });
  return questions;
}

export { getShowFrequentlyAskedQuestions };

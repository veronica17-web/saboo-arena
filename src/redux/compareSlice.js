import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  compareItems: localStorage.getItem("compareItems")
    ? JSON.parse(localStorage.getItem("compareItems"))
    : [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState: INITIAL_STATE,

  reducers: {
    addToCompare: (state, action) => {
      const itemIndex = state.compareItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        toast.error("Vehicle already added to compare");
      } else {
        const newItems = { ...action.payload };
        state.compareItems.push(newItems);
        toast.success("Added to compare");
      }
      localStorage.setItem("compareItems", JSON.stringify(state.compareItems));
    },
  },
});

export const { addToCompare } = compareSlice.actions;

export default compareSlice.reducer;

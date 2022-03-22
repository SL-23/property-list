import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyListState } from "./PropertyListModels";

const initialState: PropertyListState = {
  resultList: [],
  savedList: []
}

const PropertyListSlice = createSlice({
  name: "propertyList",
  initialState,
  reducers: {
    // get initial list
    getPropertyList(state, action: PayloadAction<any>) {
      state.resultList = action.payload.results;
      state.savedList = action.payload.saved
    },
    addSaved(state) {

    },
    removeSaved(state) {

    }
  }
});

export const { addSaved, removeSaved, getPropertyList } = PropertyListSlice.actions;
export default PropertyListSlice;
import { createSlice } from "@reduxjs/toolkit";

interface PropertyListState {
  resultList: Array<any>;
  savedList: Array<any>
}

const initialState: PropertyListState = {
  resultList: [],
  savedList: []
}

const PropertyListSlice = createSlice({
  name: "propertyList",
  initialState,
  reducers: {
    addSaved(state) {

    },
    removeSaved(state) {

    }
  }
});

export const { addSaved, removeSaved } = PropertyListSlice.actions;
export default PropertyListSlice;
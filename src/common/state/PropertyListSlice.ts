import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPropertyList, addSave, removeSave } from "./PropertyListActions";
import { PropertyListState, PropertyItem } from "./PropertyListModels";

const initialList: Record<string, PropertyItem> = {};

const initialState: PropertyListState = {
  empty: true,
  ready: false,
  propertyList: initialList
}

const extraReducers = (builder: ActionReducerMapBuilder<PropertyListState>) => {
  builder.addCase(
    getPropertyList.fulfilled,
    (state: PropertyListState, action: PayloadAction<Array<PropertyItem>>) => {
      const list = action.payload;
      list.map((item: PropertyItem, index: number) => {
        const key = item.id;
        const value = item;
        state.propertyList[key] = value;
      })
      state.empty = list.length < 1;
      state.ready = true;
    }
  )
  builder.addCase(
    addSave,
    (state: PropertyListState, action: PayloadAction<string>) => {
      state.propertyList[action.payload].saved = true;
    }
  )
  builder.addCase(
    removeSave,
    (state: PropertyListState, action: PayloadAction<string>) => {
      state.propertyList[action.payload].saved = false;
    }
  )
}

const PropertyListSlice = createSlice({
  name: "propertyList",
  initialState,
  reducers: {
  },
  extraReducers
});

export default PropertyListSlice;
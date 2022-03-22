import { configureStore } from "@reduxjs/toolkit";
import PropertyListSlice from "./PropertyListSlice";

const configureAppStore = () => {
  return configureStore({
    reducer: {
      propertyList: PropertyListSlice.reducer
    }
  })
}

const store = configureAppStore();

export default store;
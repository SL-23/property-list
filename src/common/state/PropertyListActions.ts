import { createAsyncThunk } from "@reduxjs/toolkit";
import { PropertyService } from "../services";
import { PropertyItem } from "./PropertyListModels";

enum PropertyListRequest {
  GetPropertyList = "propertyList/GetPropertyList",
  LoadInitialData = "propertyList/LoadInitialData"
}

const createPropertyItem  = (p: any) => {
  const id = p.id;

  const item = { ... p};
  item.saved = false;
  item.expired = false;

  return item;
}

export const getPropertyList = createAsyncThunk(
  PropertyListRequest.GetPropertyList,
  async(_, { rejectWithValue} ) => {
    try {
      const response = await PropertyService.getPropertyList();

      if(!response || !response.data) return rejectWithValue("Error: getPropertyList");

      let list: Array<PropertyItem> = [];
      response.data.results.map((p : any) => {
        const item = createPropertyItem(p);
        list.push(item);
      })


      return list;
    }
    catch (ex: any) {
      return rejectWithValue(ex.message);
    }
  }
)

export const LoadInitialData = createAsyncThunk(
  PropertyListRequest.LoadInitialData,
 async (_, {dispatch, rejectWithValue }) => {
   try {
     await dispatch(getPropertyList());
   }
   catch (ex: any) {
     return rejectWithValue(ex.message)
   }
 }
)
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PropertyService } from "../services";
import { PropertyItem } from "./PropertyListModels";

enum PropertyListRequest {
  GetPropertyList = "propertyList/GetPropertyList",
  LoadInitialData = "propertyList/LoadInitialData"
}

const createPropertyItem  = (p: any, isSaved: boolean, isExpired: boolean) => {
  const id = p.id;
  const item = { ... p};
  item.saved = isSaved;
  item.expired = isExpired;

  return item;
}


export const getPropertyList = createAsyncThunk(
  PropertyListRequest.GetPropertyList,
  async(_, { rejectWithValue} ) => {
    try {
      const response = await PropertyService.getPropertyList();
      if(!response || !response.data) return rejectWithValue("Error: getPropertyList");

      let list: Array<PropertyItem> = [];
      // get result list
      response.data.results.map((p : any) => {
        // assume not saved
        const item = createPropertyItem(p, false, false);
        list.push(item);
      })
      // update the result list: update saved flag
      response.data.saved.map((p: any) => {
        const item = list.find((listPro : PropertyItem) => listPro.id === p.id);
        if(!item) {
          const expiredItem = createPropertyItem(p, true, true);
          list.push(expiredItem);
        } else {
          item.saved = true;
        }
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

export const addSave = createAction(
  "propertyList/addSave",
  (propertyId: string) => {
    return {
      payload: propertyId
    }
  }
)

export const removeSave = createAction(
  "propertyList/removeSave",
  (propertyId: string) => {
    return {
      payload: propertyId
    }
  }
)
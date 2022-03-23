import { createSelector } from "@reduxjs/toolkit";
import { PropertyListState } from "./PropertyListModels";

const selectRoot = (state: PropertyListState) => state;

const selectPropertyList = createSelector(
  selectRoot,
  (root: PropertyListState) => {
    if(!root) return null;
    return root.propertyList;
  }
)
export const selectStatus = createSelector(
  selectPropertyList,
  ( propertyList ) => {
    if(!propertyList) return null;
    return {
      ready: propertyList.ready,
      empty: propertyList.empty
    }
  }
)

export const selectResults = createSelector(
  selectPropertyList,
  ( propertyList ) => {
    if(!propertyList) return null;
    console.log(typeof(propertyList.propertyList));
    return propertyList.propertyList;
  }
)

export const selectSaved = createSelector(
  selectRoot,
  (root: PropertyListState) => {
    if(!root) return null;
    return root.propertyList;
  }
)
import { createSelector } from "@reduxjs/toolkit";
import { PropertyListState } from "./PropertyListModels";

const selectRoot = (state: PropertyListState) => state;

export const selectResults = (state: any) => createSelector(
  selectRoot,
  (root: PropertyListState) => {
    if(!root) return null;
    return root.resultList;
  }
)

export const selectSaved = (state: any) => createSelector(
  selectRoot,
  (root: PropertyListState) => {
    if(!root) return null;
    return root.savedList;
  }
)
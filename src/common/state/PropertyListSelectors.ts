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
    // results should only display non-expired properties
    const resultList = Object.values(propertyList.propertyList).filter(p => !p.expired && !p.disabled);
    return resultList;
  }
)

export const selectSaved = createSelector(
  selectPropertyList,
  ( propertyList ) => {
    if(!propertyList) return null;
    const savedList = Object.values(propertyList.propertyList).filter(p => p.saved);
    return savedList;
  }
)

export const selectDisabled = createSelector(
  selectPropertyList,
  ( propertyList ) => {
    if(!propertyList) return null;
    const disabledList = Object.values(propertyList.propertyList).filter(p => p.disabled);
    return disabledList;
  }
)
import store from "./common/state/store";
import { LoadInitialData, addSave, removeSave } from "./common/state/PropertyListActions";

import { waitFor } from "@testing-library/react";

it("load initial property list", async () => {
  await waitFor(() => store.dispatch(LoadInitialData()));
  const initialListState = store.getState().propertyList;
  // expect to load all 4 properties
  expect(initialListState.empty).toBe(false);
  expect(initialListState.ready).toBe(true);
  expect(Object.keys(initialListState.propertyList).length).toBe(4);
})

it("update the save flag to save a property", async () => {
  await waitFor(() => store.dispatch(addSave("1")));

  const listState = store.getState().propertyList;
  // expect: should still be 4 properties
  expect(listState.empty).toBe(false);
  expect(listState.ready).toBe(true);
  expect(Object.keys(listState.propertyList).length).toBe(4);
  const target = listState.propertyList["1"];
  // save flag should be true
  expect(target.saved).toBe(true);
})

it("update the save flag to remove a property", async () => {
  await waitFor(() => store.dispatch(removeSave("4")));
  const listState = store.getState().propertyList;
  // expect: should still be 4 properties
  expect(listState.empty).toBe(false);
  expect(listState.ready).toBe(true);
  expect(Object.keys(listState.propertyList).length).toBe(4);
  const target = listState.propertyList["4"];
  // save flag should be flase
  expect(target.saved).toBe(false);
})

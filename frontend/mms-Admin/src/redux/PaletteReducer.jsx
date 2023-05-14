import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  items: [],
  itemsToDisplay: [],
  filteredItems: [],
  loading: false,
};
const PalleteReducer = createSlice({
  name: "palleteReducer",
  initialState,
  reducers: {
    ITEMS_TO_DISPLAY: (state, action) => {
      state.items = action.payload;
    },
    SET_ITEMS_TO_DISPLAY: (state, action) => {
      state.itemsToDisplay = action.payload;
    },
    SET_ARCHIVE_FILTERED_ITEMS: (state, action) => {
      state.filteredItems = action.payload;
    },
    SET_ARCHIVE_LOADING: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default PalleteReducer.reducer;
export const {
  ITEMS_TO_DISPLAY,
  SET_ITEMS_TO_DISPLAY,
  SET_ARCHIVE_FILTERED_ITEMS,
  SET_ARCHIVE_LOADING,
} = PalleteReducer.actions;

function getShowArchiveitems() {
  const items = useSelector((state) => state.pagination.items);
  return items;
}

function getShowArchiveitemsToDisplay() {
  const itemsToDisplay = useSelector(
    (state) => state.pagination.itemsToDisplay
  );
  return itemsToDisplay;
}

function getShowArchiveFilteredItems() {
  const filteredItems = useSelector((state) => state.pagination.filteredItems);
  return filteredItems;
}

function getShowArchiveLoading() {
  const loading = useSelector((state) => state.pagination.loading);
  return loading;
}
export {
  getShowArchiveitems,
  getShowArchiveitemsToDisplay,
  getShowArchiveFilteredItems,
  getShowArchiveLoading,
};

import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import {
  SET_ARCHIVE_FILTERED_ITEMS,
  SET_ARCHIVE_LOADING,
  getShowArchiveitems,
} from "../redux/PaletteReducer";

function ArchiveSearchInput() {
  const dispatch = useDispatch();

  //this is the data from Pallete Store
  const allItems = getShowArchiveitems();

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false); // add a loading state

  //the initial value at first would be all items from Pallete Store
  const [items, setItems] = useState(allItems);

  // create a debounced function that will update the filtered items after a delay
  const debouncedSearch = debounce((query) => {
    if (query) {
      const filteredItems = allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filteredItems);
    } else {
      setItems(allItems);
    }
  }, 300);

  // handle search query change
  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // filter items based on search query
    setIsLoading(true); // set loading to true
    debouncedSearch(query);
    setIsLoading(false); // set loading to false when search query is done
  };

  useEffect(() => {
    dispatch(SET_ARCHIVE_FILTERED_ITEMS(items));
  }, [items, searchQuery, dispatch]);

  useEffect(() => {
    dispatch(SET_ARCHIVE_LOADING(isLoading));
  }, [isLoading, dispatch]);

  console.log(`isLoading from top : ${isLoading}`);
  return (
    <Box sx={{ width: "100%", maxWidth: "278px" }}>
      <TextField
        variant="outlined"
        placeholder="Search archive..."
        onChange={handleSearchQueryChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                disableRipple
                sx={{
                  padding: 0,
                  marginRight: 1,
                  marginLeft: 2,
                  color: "#058B94",
                }}
              >
                <FiSearch size={24} style={{ color: "#058B94" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: ["none", "none", "flex"],
        }}
      />
    </Box>
  );
}

export default ArchiveSearchInput;

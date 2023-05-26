import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TbPlayerSkipForward, TbPlayerSkipBack } from "react-icons/tb";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  SET_ITEMS_TO_DISPLAY,
  getShowArchiveFilteredItems,
} from "../redux/PaletteReducer";
import { useDispatch } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();

  // const filteredItems = getShowArchiveFilteredItems()
  const items = getShowArchiveFilteredItems();
  // console.log(filteredItems)
  const totalItems = items.length;
  const itemsPerPage = 10;

  //   const palette = usePalette();
  const [currentPage, setCurrentPage] = useState(1);

  // calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // create an array of page numbers for pagination buttons
  const PageNumbers = [];
  for (let i = 0; i <= totalPages; i++) {
    PageNumbers.push(i);
  }

  // calculate the index of the first and last items to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // handle page change
  // const handlePageName = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // handle previous page button click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // handle next page button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // create an array of items to be displayed on the current page
  const itemsToDisplay = items.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(SET_ITEMS_TO_DISPLAY(itemsToDisplay));
  }, [itemsToDisplay, dispatch]);

  return (
    <>
      <Stack direction={"row"} gap={1} alignItems={"center"} width={"100%"}>
        {/* Pagination Button */}
        <span onClick={handlePrevPage}>
          <TbPlayerSkipBack size={30} />
        </span>

        <AiOutlineLeft size={30} />

        <Typography
          sx={{
            fontFamily: "Mukta",
            leading: "27px",
            fontWeight: 600,
            textAlign: "center",
            color: "#333333",
          }}
        >
          {`${indexOfFirstItem}- ${indexOfLastItem} of ${totalItems}`}
        </Typography>

        <AiOutlineRight size={30} />
        <span onClick={handleNextPage}>
          <TbPlayerSkipForward size={30} />
        </span>
      </Stack>
    </>
  );
};

export default Pagination;

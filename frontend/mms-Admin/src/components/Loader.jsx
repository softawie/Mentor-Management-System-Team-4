import React from "react";
import { Box } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import { usePalette } from "../theme/theme";
import PropTypes from "prop-types";

export default function Loader({ isOpen }) {
  const palette = usePalette();
  return (
    isOpen && (
      <Box
        sx={{
          width: "100%",
          height: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeDots
          height="20"
          width="100%"
          radius="9"
          color={palette.primary.main}
          ariaLabel="three-dots-loading"
          visible
        />
      </Box>
    )
  );
}

Loader.propTypes = {
  isOpen: PropTypes.bool,
};

export function LoaderButton() {
  const palette = usePalette();
  return (
    <ThreeDots
      height="20"
      width="100%"
      radius="9"
      color={palette.primary.main}
      ariaLabel="three-dots-loading"
      visible
    />
  );
}

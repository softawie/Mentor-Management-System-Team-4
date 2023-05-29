import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";

function ArchiveSearchInput() {

  return (
    <Box sx={{ width: "100%", maxWidth: "278px" }}>
      <TextField
        variant="outlined"
        placeholder="Search archive..."
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

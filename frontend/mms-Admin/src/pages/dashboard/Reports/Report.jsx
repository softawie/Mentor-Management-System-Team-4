import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { HiLogout } from "react-icons/hi";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {Box, Stack} from '@mui/material';



function CardTop({ icon, toptext, bottomtext, percentage }) {
  return (
    <Box
    sx={{
      backgroundColor: "#E6FDFE",
      // width: "178px",
      height: "90px",
      borderRadius: "7px",
      // py: 2,
      // px: 6,
      position: "relative",
      flex: "none",
      p: 2,
      justifyContent:"center",
      alignItems:"center",
      display: "flex",
    }}
  >
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
      width={"100%"}
    >
      <Box sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "Mukta",

            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "33px",
            color: "#333333",
          }}
        >
          {toptext}
        </Typography>
        <Stack
          sx={{
            justifyContent: "spaceBetween",
            alignItems: "center",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "33px",
              pr:1,
            }}
          >
            {bottomtext}
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#808080"
            }}
          >
           {increment}
          </Typography>
        </Stack>
      </Box>
      {icon}
        
      
    </Stack>
  </Box>
  );
}

export default CardTop;

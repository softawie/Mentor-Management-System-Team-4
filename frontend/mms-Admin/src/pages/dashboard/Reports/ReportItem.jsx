import {
  Typography,
  Stack,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ReportItem = ({title, icon}) => {
  return (
    <Stack sx={{ bgcolor: "#E6FDFE" }}>
      <ListItem>
        <ListItemAvatar>
         {icon}
        </ListItemAvatar>
        <ListItemText primaryTypographyProps={{color:
        '#333333',
        fontWeight:"bold",
        fontSize:"20px"
      }}
          primary={title}
          secondary={<Stack sx={{flexDirection: "row" }}>
            <Typography fontWeight="bold" fontSize="12px">By Ibrahim Kabir</Typography> -
            <Typography fontSize="12px"> 19th - 25th Oct 22</Typography>
             </Stack>}
        ></ListItemText>
      </ListItem>
    </Stack>
  );
};

ReportItem.propTypes = {
icon: PropTypes.node, 
title: PropTypes.string
};
export default ReportItem;

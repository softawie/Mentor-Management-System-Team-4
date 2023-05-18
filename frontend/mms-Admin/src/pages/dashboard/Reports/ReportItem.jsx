import {
  Box,
 
  Typography,
  Stack,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Icon,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";



const ReportItem = ({title, author, date, icon}) => {
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

export default ReportItem;

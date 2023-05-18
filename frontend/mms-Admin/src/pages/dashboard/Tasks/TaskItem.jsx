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
  
  import React from "react";
  import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
  import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
  
  
  
  const TaskItem = ({title, date}) => {
    return (
      <Stack sx={{ bgcolor: "#E6FDFE" }}>
        <ListItem>
          <ListItemAvatar>
           <ShopOutlinedIcon fontSize="large"/>
          </ListItemAvatar>
          <ListItemText primaryTypographyProps={{color:
          '#333333',
          fontWeight:"bold",
          fontSize:"20px"
        }}
            primary={title}
            secondary={<Stack sx={{flexDirection: "row" }}>
             <CalendarMonthOutlinedIcon fontSize="small" color="#E6FDFE"/>
              <Typography fontSize="12px"> 3 Days left from Now</Typography>
               </Stack>}
          ></ListItemText>
        </ListItem>
        
      </Stack>
    );
  };
  
  export default TaskItem;
  
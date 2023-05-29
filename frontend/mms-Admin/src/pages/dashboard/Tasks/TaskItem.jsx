import {
    
   
    Typography,
    Stack,
    ListItem,
   
    ListItemAvatar,
    ListItemText,
  
  } from "@mui/material";
  
  import React from "react";
  import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
  import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
  import PropTypes from "prop-types"
  
  
  
  const TaskItem = ({title}) => {
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
  
  TaskItem.propTypes = {title: PropTypes.node,
  label: PropTypes.string,};
  export default TaskItem;
  
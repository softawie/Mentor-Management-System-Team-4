import {
  Box,
  LinearProgress,
  Typography,
  Stack,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import Ellipse from "../../../assets/images/Ellipse.png";


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

const ProgramItem = ({title, progress, date}) => {
  return (
    <Stack sx={{ bgcolor: "#E6FDFE" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={Ellipse} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={<LinearProgressWithLabel value={progress} />}
        ></ListItemText>
      </ListItem>
      <Typography>{date} </Typography>
    </Stack>
  );
};

export default ProgramItem;

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
import PropTypes from "prop-types";
import Ellipse from "../../../assets/images/Ellipse.png";

function LinearProgressWithLabel({value, ...rest}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{value}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...rest} />
      </Box>
    </Box>
  );
}

const ProgramItem = ({title, progress, date}) => {
  return (
    <Stack sx={{ bgcolor: "#E6FDFE" }}>
      <ListItem>object
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

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number
};

ProgramItem.propTypes = {
  title: PropTypes.node,
  progress: PropTypes.number,
  date: PropTypes.object
};

export default ProgramItem;

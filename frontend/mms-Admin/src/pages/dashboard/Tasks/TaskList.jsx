import React from "react";
import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = [
    {
      id: 5,

      title: "Room liberary article write...",

      date: "19th-20th Oct",
    },
    {
      id: 6,
      title: "Room liberary article write...",

      date: "19th-20th Oct",
    },
    {
      id: 7,
      title: "Room liberary article write...",

      date: "19th-20th Oct",
    },
  ];
  return (
    <Stack backgroundColor="#F7FEFF" sx={{ p: 4 }}>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography color="#333333" fontWeight="bold">
          Tasks overview
        </Typography>
      </Stack>

      <Grid container columns="7" spacing={2} >
        <Grid
          item
          xs="7"
          md="1"
         
        >
          <Box color="#ffffff" fontWeight="bold" fontSize="20px"
           sx={{
            bgcolor: "#058B94",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingLeft: "0px",
            paddingTop: "0px",
            borderRadius: "10px",
            width: "100%",
            height: "100%",
          }}>
            In Progress
          </Box>
        </Grid>
        {tasks.map((task) => (
          <Grid item xs="7" md="2" key={task.title}>
            <TaskItem {...task} />
          </Grid>
        ))}
      </Grid>
      <Box marginBottom={2}>
        <Button
          fullWidth="false"
          sx={{
            backgroundColor: "#058B94",
            width: "100px",
            float: "right",

            mt: 2,
          }}
        >
          {" "}
          View All
        </Button>
      </Box>
      <Grid container columns="7" spacing={2} >
        <Grid
          item
          xs="7"
          md="1"
         
        >
          <Box color="#ffffff" fontWeight="bold" fontSize="20px"
           sx={{
            bgcolor: "#058B94",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingLeft: "0px",
            paddingTop: "0px",
            borderRadius: "10px",
            width: "100%",
            height: "100%",
          }}>
           Completed
          </Box>
        </Grid>
        {tasks.map((task) => (
          <Grid item xs="7" md="2" key={task.title}>
            <TaskItem {...task} />
          </Grid>
        ))}
      </Grid>
      <Box>
        <Button
          fullWidth="false"
          sx={{
            backgroundColor: "#058B94",
            width: "100px",
            float: "right",

            mt: 2,
          }}
        >
          {" "}
          View All
        </Button>
      </Box>
    </Stack>
  );
};

export default TaskList;

import React, { useState } from "react";
import { Field, Formik, useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { HiLogout } from "react-icons/hi";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import { Grid } from "@mui/material";
import ProgramList from "./Programs/ProgramList";

import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  Select,
} from "@mui/material";
import * as Yup from "yup";
// import Card from "./Card";
import CardTop from "./CardTop";
import { usePalette } from "../../theme/theme";
import { MdPallet } from "react-icons/md";
import { border, display } from "@mui/system";
// import Program from "./Programs/ProgramItem";
// import Report from "./Reports/Report";
import ReportList from "./Reports/ReportList";
import TaskList from "./Tasks/TaskList";

function Dashboard() {
  const [week, setWeek] = useState("");
  const palette = usePalette();
  const cardContents = [
    {
      id: 1,
      toptext: "Mentors",
      bottomtext: "40",
      increment: "+32%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
    {
      id: 2,
      toptext: "Mentors Managers",
      bottomtext: "38",
      increment: "+22%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
    {
      id: 3,
      toptext: "Report",
      bottomtext: "30",
      increment: "+12%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
    {
      id: 4,
      toptext: "Tasks",
      bottomtext: "30",
      increment: "+12%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
  ];

  // REport

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  return (
    <Stack>
      <Stack direction={"row"} widht={"100%"} justifyContent={"space-between"}>
        <Typography
          variant="h4"
          sx={{
            fontSize: 24,
            fontWeight: 600,
            color: "#141414",
            fontFamily: "Mukta",
          }}
        >
          Dashboard
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">This week</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={week}
            label="week"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2}>Week two</MenuItem>
            <MenuItem value={3}>Week Three</MenuItem>
            <MenuItem value={4}>Week Four</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Grid container columns="5" spacing={2} sx={{ mr: 4, ml: 2 }}>
        <Grid item xs="5" md="1">
          <Box
            sx={{
              backgroundColor: palette.primary.main,

              borderRadius: "7px",
              py: 2,
              px: 2,
            }}
          >
            <Stack>
              <Stack
                direction={"row"}
                spacing={2}
                textAlign={"start"}
                alignItems={"center"}
              >
                <Typography
                  sx={{
                    fontFamily: "Mukta",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "64px",
                    color: "#F7FEFF",
                  }}
                >
                  6
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mukta",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#F7FEFF",
                    width: "84px",
                  }}
                >
                  Active Program
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    widht: "55px",
                    height: "24px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #058B94",
                    alignItems: "center",
                    textAlign: "center",
                    position: "absolute",
                    right: "12px",
                    top: "12px",
                    color: "#035D63",
                  }}
                >
                  {" "}
                  View
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs="5" md="4" sx={{ display: "flex", alignItems: "center" }}>
          <Grid container columns="4" justifyContent="space-evenly" spacing={1}>
            {cardContents.map((cardContent) => {
              return (
                <Grid item sx={{minWidth:"200px" }}>
                  <CardTop
                    key={cardContent.id}
                    toptext={cardContent.toptext}
                    bottomtext={cardContent.bottomtext}
                    increment={cardContent.increment}
                    icon={cardContent.icon}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* 
    programs Section program Sections Program Sections Program Sections Program  */}
      <ProgramList />

      {/* Reports Section Reports Section Reports Section Reports Section Reports Section Reports Section */}
      <ReportList />

      <TaskList/>
    </Stack>
  );
}

export default Dashboard;

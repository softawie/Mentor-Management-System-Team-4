import React from "react";
import { Box, Stack, Typography, Button, Grid  } from "@mui/material";
import ProgramItem from "./ProgramItem";


const ProgramList = () => {
  const programs = [
    {
      date: "Jun 13, 2022 -> Feb 10, 2023",
      title: "GADS Program 2022",
      progress: 50,
    },
    {
      date: "Jun 17, 2023 -> Feb 11, 2023",
      title: "GADS Program 2023",
      progress: 60,
    },
    {
      date: "Jul 13, 2024 -> Feb 10, 2024",
      title: "GADS Program 2024",
      progress: 70,
    },
  ];
  return (
    <Stack backgroundColor="#F7FEFF" sx={{ p: 4 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Programs overview</Typography>
        <Button>
          {" "}
          <Box>6 Active</Box>
        </Button>
      </Stack>

      <Grid container columns="3" spacing="22">
      

        {programs.map((program) => (
          <Grid item xs="3" md="1" key={program.title}>
            <ProgramItem {...program} />
          </Grid>
        ))}
      </Grid>

      <Box>
        <Button
          sx={{
            widht: "55px",
            height: "24px",
            backgroundColor: "#058B94",
            alignItems: "right",
            position: "absolute",
            right: "30px",
          }}
        >
          {" "}
          View All
        </Button>
      </Box>
    </Stack>
  );
};

export default ProgramList;

import React from "react";
import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import ReportItem from "./ReportItem";

const ReportList = () => {
  const reports = [
    {
      id: 5,

      title: "Google African Scholarships",
      author: "Ibrahim Kabir",
      date: "19th-20th Oct",
      icon: <ArticleOutlinedIcon color="primary" fontSize="large" />,
    },
    {
      id: 6,
      title: "Room Library article write...",
      author: "Alison Davis",
      date: "19th-20th Oct",
      icon: <ShopOutlinedIcon color="primary" fontSize="large" />,
    },
    {
      id: 7,
      title: "Google African Scholarships",
      author: "Ibrahim Kabir",
      date: "19th-20th Oct",
      icon: <ArticleOutlinedIcon color="primary" fontSize="large" />,
    },
  ];
  return (
    <Stack backgroundColor="#F7FEFF" sx={{ p: 4 }}>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography
          color="#333333"
          fontWeight="bold"
        >
          Reports overview
        </Typography>

        <Box color="#333333"
          fontWeight="bold">10 Reports Submitted</Box>
      </Stack>

      <Grid container columns="3" spacing="22">
        {reports.map((report) => (
          <Grid item xs="3" md="1" key={report.title}>
            <ReportItem {...report} />
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

export default ReportList;

import React from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { usePalette } from "../theme/theme";
import AuthLogoAndText from "../components/AuthLogoAndText";

export default function AuthLayout() {
  const palette = usePalette();
  console.log(palette.primary.main);
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Grid container columns={2} sx={{ height: "100%" }}>
        <Grid item xs={0} sm={1} sx={{display:["none","none","block"]}}>
          <Box
            sx={{
              position: "relative",
              width: "100%",

              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              backgroundColor: palette.primary.main,
            }}
          >
            <AuthLogoAndText />
          </Box>
        </Grid>
        <Grid item xs={2} sm={2} md={1} sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

import React, { useState } from "react";
import { BiMessageAlt, BiBell } from "react-icons/bi";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../assets/images/Logo-Onley.svg";
import { usePalette } from "../../theme/theme";
import { FiSearch } from "react-icons/fi";
import {
  Box,
  AppBar,
  Avatar,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Person } from "@material-ui/icons";

export default function AppHeader() {
  // const classes = useStyles();
  const navigate = useNavigate();
  const palette = usePalette();
  const openProfile = () => navigate("/profile");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  return (
    <AppBar sx={{ bg: palette.primary }}>
      <Toolbar>
        <Box sx={{ width: "100%", px: 2 }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", display: "flex" }}
              >
                <img src={Logo} alt="logo" />
                <Typography
                  variant="h3"
                  sx={{ fontSize: "16px", fontWeight: 600 }}
                >
                  Mentor’s Managers System
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              sx={{
                flexDirection: "row",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: ["block", "block", "none"] }}
              >
                <MenuIcon />
              </IconButton>

              <Stack
                sx={{ display: ["none", "none", "flex"], alignItems: "center" }}
                direction="row"
                spacing={2}
              >
                <TextField
                  variant="outlined"
                  onChange={handleChange}
                  // label="search for anything"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiSearch
                          size={24}
                          style={{ color: palette.secondary.main }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  // fullWidth
                  sx={{
                    width: [100, 500],
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    display: ["none", "none", "flex"],
                  }}
                />

                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <BiMessageAlt size={26} />
                  <BiBell size={26} />
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar>10</Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={openProfile}>
                      <ListItemIcon>
                        <Person />
                      </ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>{/* <IoMdLogOut /> */}</ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import { Box, Drawer, ListItemText, Stack, Toolbar } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiMessageAlt, BiMessageDetail, BiUser } from "react-icons/bi";
import { FiSettings, FiUsers } from "react-icons/fi";
import { HiLogout } from "react-icons/hi";
import { MdOutlineAccountBox } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import Certificate from "../../../src/assets/images/certificate.svg";
import Report from "../../../src/assets/images/reports.svg";
import Task from "../../../src/assets/images/task.svg";
import { drawerWidth, usePalette } from "../../theme/theme";
import MenuItem from "./MenuItem";
function Sidebar() {
  const palette = usePalette();
  const location = useLocation();

  return (
    <Box
      sx={{ width: { md: drawerWidth }, height: "100vh", position: "fixed" }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "100%",
            bgcolor: "#F7FEFF",
            position: "inherit",
          },
        }}
        open
      >
        <Toolbar />
        <Stack
          direction="column"
          sx={{ alignItems: "center", justifyContent: "center"}}
        >

          <ListItemText
            primary='Hi Kabiru'
            primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 24, color: "common.black" } }}
            secondary='Admin'
            secondaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 18 } }}
          />

          <MenuItem
            path="/profile"
            name="Profile"
            icon={
              <MdOutlineAccountBox
                size={25}
                color={location.pathname === "/profile" ? "#333333" : "#808080"}
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/profile"}
          />
          <MenuItem
            path="/"
            name="Dashboard"
            icon={
              <RxDashboard
                size={25}
                color={location.pathname === "/" ? "#333333" : "#808080"}
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/"}
          />
          <MenuItem path="/tasks" name="Tasks" icon={<img src={Task} />} />
          <MenuItem path="/reports" name="Reports" icon={<img src={Report} />} />
          <MenuItem
            path="/mentors"
            name="Mentors"
            icon={<BiUser size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/mentor-manager"
            name="Mentor Managers"
            icon={<FiUsers size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/approval-requests"
            name="Approval Requests"
            icon={
              <AiOutlinePlusCircle size={25} color={palette.secondary.main} />
            }
          />
          <MenuItem
            path="/certificates"
            name="Certificates"
            icon={<img src={Certificate} />}
          />
          <MenuItem
            path="/messages"
            name="Messages"
            icon={<BiMessageAlt size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/discussions"
            name="Discussion Forum"
            icon={<BiMessageDetail size={25} color={palette.secondary.main} />}
          />
          <MenuItem
            path="/settings"
            name="Settings"
            icon={
              <FiSettings
                size={25}
                color={
                  location.pathname === "/settings" ? "#333333" : "#808080"
                }
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/settings"}
          />

          <MenuItem
            path="/login"
            name="Logout"
            icon={
              <HiLogout
                size={25}
                color={location.pathname === "/login" ? "#333333" : "#808080"}
              />
            }
            sx={{ backgroundColor: "#FFFFFF" }}
            active={location.pathname === "/login"}
          />
        </Stack>
      </Drawer>
    </Box>
  );
}

export default Sidebar;

import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Stack, Typography } from "@mui/material";
import { usePalette } from "../theme/theme";
import PropTypes from "prop-types";

const ArchiveInfo = ({ logo: Logo, title, date, time }) => {
  const palette = usePalette();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      width={"100%"}
      sx={{
        border: "1px solid #E6E6E6",
        borderRadius: "5px",
        p: 1,
        gap: 2,
      }}
    >
      <span>{Logo}</span>
      <Stack direction={"column"} alignItems={"start"}>
        <Typography
          sx={{
            fontFamily: "Mukta",
            fontSize: "20px",
            lineHeight: "33px",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          {title}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"start"}
          justifyContent={"center"}
          gap={6}
        >
          <Stack direction={"row"} gap={2} alignItems={"center"} ju>
            <FaRegCalendarAlt size={18} />
            <Typography
              sx={{
                color: palette.secondary.main,
                fontSize: "12px",
                lineHeight: "20px",
                fontFamily: "Mukta",
                fontWeight: 400,
              }}
            >
              {date}
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={2} alignItems={"center"} ju>
            <HiOutlineClock size={18} />
            <Typography
              sx={{
                color: palette.secondary.main,
                fontSize: "12px",
                lineHeight: "20px",
                fontFamily: "Mukta",
                fontWeight: 400,
              }}
            >
              {time}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

ArchiveInfo.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default ArchiveInfo;

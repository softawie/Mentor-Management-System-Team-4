import { Stack, Typography } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";

const Pagination = () => {

  return (
    <>
      <Stack direction={"row"} gap={1} alignItems={"center"} width={"100%"}>
        {/* Pagination Button */}
        <span>
          <TbPlayerSkipBack size={30} />
        </span>

        <AiOutlineLeft size={30} />

        <Typography
          sx={{
            fontFamily: "Mukta",
            leading: "27px",
            fontWeight: 600,
            textAlign: "center",
            color: "#333333",
          }}
        >
          {`${0}- ${2} of ${3}`}
        </Typography>

        <AiOutlineRight size={30} />
        <span>
          <TbPlayerSkipForward size={30} />
        </span>
      </Stack>
    </>
  );
};

export default Pagination;

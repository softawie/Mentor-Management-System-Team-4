import React from "react";
import { Stack, Card } from "@mui/material";
import ArchiveInfo from "../../../components/ArchiveInfo";
import {
  getShowArchiveLoading,
  getShowArchiveitemsToDisplay,
} from "../../../redux/PaletteReducer";
import Loader from "../../../components/Loader";

function Archive() {
  const itemsToDisplay = getShowArchiveitemsToDisplay();
  const loading = getShowArchiveLoading();

  return (
    <Card>
      <Stack direction={"column"} alignItems={"center"} width={"100%"}>
        {/* Archive settings form goes here */}
        <Stack
          alignItems={"center"}
          sx={{
            border: "1px solid #E6E6E6",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            width={"100%"}
            gap={1}
            p={2}
          >
            {/* Archieve data map */}
            {loading ? (
              <>
                <Loader />
              </>
            ) : (
              <>
                {itemsToDisplay.map(({ logo: Logo, title, date, time }, id) => (
                  <Stack width={"100%"} key={id}>
                    <ArchiveInfo
                      logo={<Logo size={26} />}
                      title={title}
                      date={date}
                      time={time}
                    />
                  </Stack>
                ))}
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
export default Archive;

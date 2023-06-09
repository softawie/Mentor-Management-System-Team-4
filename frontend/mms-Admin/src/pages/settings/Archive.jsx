import React from "react";
import { Stack, Card } from "@mui/material";
import ArchiveInfo from "src/components/ArchiveInfo";
import Loader from "src/components/Loader";
 
function Archive() {

  const itemsToDisplay = [];

  const loading = false;

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


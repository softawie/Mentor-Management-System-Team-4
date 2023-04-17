import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import { usePalette } from "../../theme/theme";
function SignupForm() {
  const palette = usePalette();
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{ alignItems: "start", textAlign: "start" }}
    >
      <Stack direction="column" spacing={1}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "53px",
            fontFamily: "Mukta",
            color: "#141414",
          }}
        >
          Forgot Password?
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "40px",
            fontFamily: "Mukta",
            color: palette.secondary.main,
          }}
        >
          An email has been sent to your registered email.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "40px",
            fontFamily: "Mukta",
            color: palette.secondary.main,
          }}
        >
          Follow the link to reset your password.
        </Typography>
      </Stack>
      <Button variant="contained" fullWidth sx={{ p: 1 }}>
        Done
      </Button>
    </Stack>
  );
}

export default SignupForm;

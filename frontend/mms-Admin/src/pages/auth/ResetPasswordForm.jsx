import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import useResetPass from "src/hooks/resetpass.hook";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";

function ResetPasswordForm() {
  const isLoading = useSelector((state) => state.isLoading);
  const { setFieldValue, handleSubmit, palette, initialValues, values } =
    useResetPass();
  return isLoading ? (
    <Loader isOpen={true} />
  ) : (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Stack
          direction="column"
          spacing={3}
          sx={{ alignItems: "start", textAlign: "start" }}
        >
          <Stack
            spacing={4}
            sx={{
              width: "100%",
              alignItems: "start",
              minWidth: { md: "426px" },
            }}
          >
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
              Set new password
            </Typography>

            <Stack
              direction="column"
              spacing={2}
              sx={{ width: "100%", alignItems: "center" }}
            >
              <TextField
                required
                name="password"
                onChange={(e) => {
                  setFieldValue("password", e.target.value);
                }}
                label="Password"
                type="password"
                fullWidth
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "27px",
                  fontFamily: "Mukta",
                  color: palette.secondary.main,
                }}
              >
                *Your new password must be different from previously used
                password.
              </Typography>
            </Stack>
            <Button
              disabled={!values.password}
              variant="contained"
              type="submit"
              fullWidth
              sx={{ p: 1 }}
            >
              Reset Password
            </Button>
          </Stack>
        </Stack>
      </Formik>
    </form>
  );
}

export default ResetPasswordForm;

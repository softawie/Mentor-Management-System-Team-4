import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"
import Loader from "src/components/Loader";
import { useForgotPasswordMutation } from "src/services/auth.service";
import { usePalette } from "src/theme/theme";
import { useState } from "react";

function ForgotPasswordForm() {
  const palette = usePalette();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const [isReset, setReset] = useState(false)

  const onSubmit = async (values) => {
    const rest = await forgotPassword(values).unwrap();
    console.log(rest);
    if(rest.success) setReset(true);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validationSchema: Yup.object().shape({ email: Yup.string().email().required() })
  })

  return isLoading ? (
    <Loader isOpen={true} />
  ) : (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          alignItems: "start",
          textAlign: "start",
          width: ["100%", "440px"],
          px: 4,
        }}
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
            {isReset
              ? "   An email has been sent to your registered email."
              : "Please enter your registered email to reset your password."}
          </Typography>

          {isReset ? (
            <>
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
            </>
          ) : (
            <>
              <TextField
                required
                name="email"
                onChange={formik.handleChange}
                label="Enter your email"
                type="email"
                fullWidth
              />
            </>
          )}
        </Stack>
        <Button
          disabled={!formik.isValid}
          variant="contained"
          type="submit"
          fullWidth
          sx={{ p: 1 }}
        >
          {!isReset ? "Reset Password" : "DONE"}
        </Button>
      </Stack>
    </form>
  );
}

export default ForgotPasswordForm;

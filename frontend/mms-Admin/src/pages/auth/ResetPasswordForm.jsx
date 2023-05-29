import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"
import Loader from "src/components/Loader";
import { useResetPasswordMutation } from "src/services/auth.service";
import { usePalette } from "src/theme/theme";

function ResetPasswordForm() {

  const palette = usePalette();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = async (values) => {

    const res = await resetPassword(values).unwrap();

    console.log(res);
  }


  const formik = useFormik({
    initialValues: {
      password: ""
    },
    onSubmit,
    validationSchema: Yup.object.shape({ password: Yup.string().required() })
  })


  return isLoading ? (
    <Loader isOpen={true} />
  ) : (
    <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
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
            disabled={!formik.isValid}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ p: 1 }}
          >
            Reset Password
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default ResetPasswordForm;

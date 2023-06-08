
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Loader from "src/components/Loader";
import { useLoginMutation } from "src/services/auth.service";
import { usePalette } from "src/theme/theme";
import { useAuth } from "src/store/auth.reducer";

function LoginForm() {

  const [login, { isLoading }] = useLoginMutation();

  const auth = useAuth();

  const navigate = useNavigate()

  const palette = usePalette()

  const onSubmit = async (values) => {
    const rest = await login(values).unwrap();
    if (rest.user.success) {
      toast('Login successfully', { type: 'success' });
      navigate('/');
    } else {
      toast(rest.user.error, { type: 'error' });

    }

  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })
  })

  if (auth.token) {
    return <Navigate to="/" />
  }

  return isLoading ? (
    <Loader isOpen={isLoading} />
  ) : (
    <Stack spacing={2} sx={{ width: "100%", px: [4, 8, 16, 32] }}>
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
        Welcome!
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
        Login to continue
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} >
          <TextField
            required
            name="email"
            onChange={formik.handleChange}
            label="Email Address"
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onCopy={(e) => {
              e.preventDefault();
            }}
            onCut={(e) => {
              e.preventDefault();
            }}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />

          <Button
            disabled={!formik.isValid}
            variant="contained"
            fullWidth
            sx={{ p: 1 }}
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </form >
      <Stack
        direction="row"
        sx={{
          textAlign: "start",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >

        <Typography
          variant="span"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "27px",
            fontFamily: "Mukta",
            color: "#141414",
            cursor: "pointer",
          }}
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </Typography>

      </Stack>
    </Stack>
  );
}

export default LoginForm;

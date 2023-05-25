import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useLogin from "src/hooks/login.hook";
import { Formik } from "formik";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Loader from "src/components/Loader";
import { useSelector } from "react-redux";

function LoginForm() {
  const { handleSubmit, palette, initialValues, setFieldValue, values } =
    useLogin();
  const [showPassword, setShowPassword] = React.useState(false);
  const isLoading = useSelector((state) => state.isLoading);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return isLoading ? (
    <Loader isOpen={true} />
  ) : (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Stack
          spacing={4}
          sx={{ width: "100%", alignItems: "start", minWidth: { md: "426px" } }}
        >
          <Stack
            direction="column"
            //   spacing={1}
            sx={{ textAlign: "start", alignItems: "start" }}
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
          </Stack>
          <Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
            <TextField
              required
              name="email"
              onChange={(e) => {
                setFieldValue("email", e.target.value);
                e.preventDefault();
              }}
              label="Email "
              type="email"
              fullWidth
            />
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setFieldValue("password", e.target.value);
                  e.preventDefault();
                }}
                onCopy={(e) => {
                  e.preventDefault();
                }}
                onCut={(e) => {
                  e.preventDefault();
                }}
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
            </FormControl>
          </Stack>
          <Button
            disabled={!values.email || !values.password}
            variant="contained"
            fullWidth
            sx={{ p: 1 }}
            type="submit"
          >
            Login
          </Button>

          <Stack
            direction="row"
            sx={{
              textAlign: "start",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box></Box>
            <Link to="/forgot-password" style={{ textDecoration: "none" }}>
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
              >
                Forgot Password?
              </Typography>
            </Link>
          </Stack>

          <Button variant="outlined" fullWidth sx={{}}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center", display: "flex" }}
            >
              <FcGoogle size={26} />
              <Typography
                variant="h3"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "Mukta",
                  color: "#023C40",
                }}
              >
                signin with Google
              </Typography>
            </Stack>
          </Button>
        </Stack>
      </Formik>
    </form>
  );
}

export default LoginForm;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-Onley.svg";
import { BsXLg } from "react-icons/bs";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { Formik, useFormik } from "formik";
import { AiOutlineRight } from "react-icons/ai";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
    position: "absolute",
    width: "450px",
    height: "840px",
    right: 0,
    top: 0,
    background: "rgba(255, 255, 255, 0.01)",
    backdropFilter: "blur(25px)",
    borderRadius: "8px 8px 0px 0px",
  },
  chatContainer: {
    position: "relative",
    height: "100vh",
  },
  chatButton: {
    position: "fixed",
    bottom: 10,
    right: 10,
    zIndex: 9999,
  },
}));

function LiveChat({ setIsOpen, setMessage }) {
  const classes = useStyles();

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit = (values, action) => {
    setMessage(values);
    action.resetForm();
  };

  const initialValues = {
    message: "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Paper elevation={3} className={classes.root}>
          <Stack
            width={"100%"}
            direction={"column"}
            position={"relative"}
            height={"100%"}
          >
            <Stack
              spacing={3}
              direction={"column"}
              sx={{
                width: "100%",
                backgroundColor: "#058B94",
                borderRadius: "8px 8px 0px 0px",
                backdropFilter: "blur(25px)",
                p: 4,
                position: "absolute",
                top: 0,
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={"100%"}
                alignItems={"center"}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "100px",
                    background: "#FFFFFF",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "50px", paddingLeft: "2px" }}
                  />
                </div>
                <Button variant="text" onClick={handleClose}>
                  <Box
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                      width: "40px",
                      height: "40px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      borderRadius: "100px",
                    }}
                  >
                    <BsXLg size={26} color="#FFFFFF" />
                  </Box>
                </Button>
              </Stack>
              <Stack direction={"column"} textAlign={"start"} spacing={1}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Mukta",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "40px",
                  }}
                >
                  MMS Support
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Mukta",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "27px",
                  }}
                >
                  A live chat interface that allows for seamless, natural
                  communication and connection.
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"column"} pt={31}>
              Testing
            </Stack>

            <Stack
              direction={"column"}
              sx={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: "0px 0px 8px 8px",
                position: "absolute",
                bottom: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(0, 0, 0, 0.05)",
                }}
              ></Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 3,
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  sx={{
                    display: "flex",
                    flex: 1,
                  }}
                >
                  <CiFaceSmile size={26} color="#999999" />

                  <input
                    placeholder="Reply ..."
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    style={{
                      outline: "none",
                      width: "100%",
                      padding: "6px",
                      border: "none",
                    }}
                  />
                </Stack>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <MdOutlinePhotoSizeSelectActual size={26} color="#999999" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0px",
                      width: "40px",
                      height: "40px",
                      background: "#035D63",
                      borderRadius: "100px",
                      cursor: "pointer",
                    }}
                  >
                    <Button variant="text" type="submit">
                      <AiOutlineRight size={30} color="#FFFFFF" />
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Formik>
    </form>
  );
}

LiveChat.propTypes = {
  setIsOpen: PropTypes.func,
  setMessage: PropTypes.func,
};

export default LiveChat;

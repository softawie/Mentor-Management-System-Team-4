import React, { useEffect } from "react";
import { statusPageStyles } from "./style.component";
import { css } from "aphrodite";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  NotFoundErrorImg,
  SystemErrorImg,
  RestrictedErrorImg,
} from "../../assets";
import Paths from "../../pages/router/paths";
import { useIsMobile } from "../../utils/helper";
// import { Text } from "src/sharedComponents/atoms";

interface LocaleProps {
  code: any;
  title: string;
  helperText: string;
  btnText: string;
}
export default function StatusPage(props: LocaleProps) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const btnActionHandler = async (code: string) => {
    switch (code) {
      case "404":
        navigate(-1);
        break;
      case "403":
        navigate(Paths.login);
        break;
      default:
        navigate(-1);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#F7F7FA";
  });
  return (
    <>
      <Container className={css(statusPageStyles.mainContainer)}>
        <Container>
          {props.code === "404" ? (
            <NotFoundErrorImg style={isMobile ? { width: "350px" } : {}} />
          ) : (
            <>
              {props.code === "403" ? (
                <RestrictedErrorImg
                  style={isMobile ? { width: "350px" } : {}}
                />
              ) : (
                <SystemErrorImg style={isMobile ? { width: "350px" } : {}} />
              )}
            </>
          )}
        </Container>
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: "#333333",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "33px",
              fontFamily: "Mukta",
            }}
            className={css(statusPageStyles.title)}
          >
            {props.title}
          </Typography>
        </Container>
        <Container style={{ padding: "20px", paddingTop: "5px" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "33px",
              fontFamily: "Mukta",
              color: "#333333",
            }}
            className={css(statusPageStyles.helperText)}
          >
            {props.helperText}{" "}
          </Typography>
        </Container>
        <Container>
          <Button
            className={css(statusPageStyles.btn)}
            onClick={() => btnActionHandler(props.code)}
          >
            {props.btnText}
          </Button>
        </Container>
      </Container>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@material-ui/core";
import { Box, Button, Stack, Typography } from "@mui/material";
import questionsData from "../../../data/faqData";
import { useDispatch } from "react-redux";
import { SET_FAQ } from "../../../redux/FaqReducer";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
function Faq() {
  const questions = questionsData;
  const dispatch = useDispatch();
  const [openQuestions, setOpenQuestions] = useState([]);

  // Create an array of refs, one for each question
  const answerRefs = useRef(questions.map(() => React.createRef()));

  // Create an object to store animation timeouts for each question
  const [animationTimeouts, setAnimationTimeouts] = useState({});

  useEffect(() => {
    dispatch(SET_FAQ(questions));
  }, [questions, dispatch]);

  const handleQuestionClick = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index));
      clearTimeout(animationTimeouts[index]);
      setAnimationTimeouts((prev) => ({
        ...prev,
        [index]: null,
      }));
      answerRefs.current[index].current.style.maxHeight = "0px";
    } else {
      const timeouts = { ...animationTimeouts };
      timeouts[index] = setTimeout(() => {
        answerRefs.current[
          index
        ].current.style.maxHeight = `${answerRefs.current[index].current.scrollHeight}px`;
      }, 0);
      setAnimationTimeouts(timeouts);
      setOpenQuestions([...openQuestions, index]);
    }
  };

  return (
    // <Card>
    //   <CardContent>
    <Card>
      <CardContent>
        <Stack
          direction={"column"}
          spacing={3}
          sx={{ width: "100%" }}
          alignItems={"start"}
        >
          {/* Faq settings form goes here */}
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Mukta",
              lineHeight: "33px",
              fontWeight: 600,
              color: "#333333",
            }}
          >
            General FAQ
          </Typography>
          {questions.map((q, index) => {
            // indexM = index
            return (
              <Stack
                direction={"column"}
                gap={4}
                textAlign={"start"}
                width={"100%"}
                key={index}
                sx={{ borderBottom: "1px solid #E6E6E6", py: 2 }}
              >
                <Stack
                  direction={"row"}
                  gap={3}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Button
                    variant="text"
                    onClick={() => handleQuestionClick(index)}
                  >
                    {openQuestions.includes(index) ? (
                      <AiOutlineMinusCircle size={26} />
                    ) : (
                      <AiOutlinePlusCircle size={26} />
                    )}
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Mukta",
                      lineHeight: "27px",
                      fontWeight: 600,
                      color: "#333333",
                    }}
                  >
                    {q.question}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    maxHeight: "0px",
                    overflow: "hidden",
                    transition: "max-height 0.5s ease-in-out",
                  }}
                  ref={answerRefs.current[index]}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Mukta",
                      lineHeight: "27px",
                      fontWeight: 400,
                      color: "#333333",
                    }}
                  >
                    {q.answer}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}
export default Faq;

import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React  from "react";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import questionsData from "../../data/faqData";
function Faq() {
  const questions = questionsData;

  const openQuestions = useState([0])

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

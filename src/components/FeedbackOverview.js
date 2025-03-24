import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const FeedbackOverview = () => {
  const feedbacks = useSelector((state) => state.feedback.feedbacks);

  return (
    <Box>
      <Typography variant="h4">Feedback Overview</Typography>
      {feedbacks.map((feedback, index) => (
        <Typography key={index}>{feedback.comment}</Typography>
      ))}
    </Box>
  );
};

export default FeedbackOverview;
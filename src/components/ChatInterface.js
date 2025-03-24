import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { Box, Button, TextField, Typography } from "@mui/material";

const ChatInterface = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.chat.conversations);

  const sendMessage = () => {
    if (input.trim()) {
      dispatch(addMessage({ text: input, sender: "user" }));
      dispatch(addMessage({ text: "This is a mocked AI response", sender: "ai" }));
      setInput("");
    }
  };

  return (
    <Box>
      <Typography variant="h4">AI Chat</Typography>
      <Box>
        {conversations.map((msg, index) => (
          <Typography key={index} color={msg.sender === "user" ? "primary" : "secondary"}>
            {msg.text}
          </Typography>
        ))}
      </Box>
      <TextField value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={sendMessage}>Send</Button>
    </Box>
  );
};

export default ChatInterface;
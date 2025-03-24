const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/response", (req, res) => {
  res.json({ message: "This is a mocked AI response" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
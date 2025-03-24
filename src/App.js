import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChatInterface from "./components/ChatInterface";
import FeedbackOverview from "./components/FeedbackOverview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div style={{ textAlign: "center", padding: "10px" }}>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </div>
          <Routes>
            <Route path="/" element={<ChatInterface />} />
            <Route path="/feedback" element={<FeedbackOverview />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

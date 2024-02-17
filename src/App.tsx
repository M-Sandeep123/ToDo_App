
import { Box } from "@mui/system";
import "./App.css";
import HompPage from "./components/HomePage";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box marginBottom="20px">
        <Typography variant="h1" color="textPrimary" fontSize="2rem">
          To-Do-App
        </Typography>
      </Box>
      <HompPage />
    </div>
  );
}

export default App;

import './App.css';
import { Box, Typography, Paper, Container } from "@mui/material";

function App() {
  return (
    <Box
    component = "span"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000080",
      }}
    >

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%"
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 40, color: "white" }}>
          Matt Romanes
        </Typography>

        <p>dfdfd</p>

      </Box>

    </Box>
  );
}

export default App;

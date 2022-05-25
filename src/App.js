import './App.css';
import { Box, Typography, Paper, Container } from "@mui/material";

function App() {
  return (
    <Box
      component="span"
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
          marginTop: "10%",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 40, color: "white" }}>
          {/* Matt Romanes */}
        </Typography>
        <Box>
          <Typography sx={{ fontSize: 20, color: "white" }}>
            Hello! I am Matt Romanes. More to come.
          </Typography>
        </Box>

      </Box>

    </Box>

  );
}

export default App;

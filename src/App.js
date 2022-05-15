import './App.css';
import { Box, Typography, Paper } from "@mui/material";


function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2%"
      }}
    >
      <Paper elevation={8} sx={{ width: "50%", height: "50%", backgroundColor: "gray" }} variant="outlined">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: 40 }}>
            Matt Romanes
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {/* <Typography sx={{ fontWeight: "bold", fontSize: 40 }}>
              Matt Romanes
            </Typography> */}

          </Box>


        </Box>
      </Paper>
    </Box>
  );
}

export default App;

import './App.css';
import { Box, Typography, Paper, Container } from "@mui/material";
import BackgroundImage from "./assets/images/queenstown.jpeg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}

    >
      <Box
        component="span"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Paper sx={{
            minWidth: "40%",
            minHeight: "100%",
            opacity: "70%",
            backgroundColor: "black"
          }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 50, color: "white" }}>
              Hello! I'm Matt Romanes.
            </Typography>
            <Box>
              <p>
                <Typography sx={{ fontSize: 20, color: "white" }}>
                 More to come.
                </Typography>
              </p>

              <p>
                <Typography sx={{ fontSize: 20, color: "white" }}>
                </Typography>
              </p>

              <p>
                <Typography sx={{ fontSize: 20, color: "white" }}>
                  
                </Typography>
              </p>

            </Box>

          </Paper>

        </Box>

      </Box>

    </div>


  );
}

export default App;

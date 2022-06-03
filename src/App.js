import './App.css';
import * as React from 'react';
import { Box, Typography, Paper, Container, BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundImage from "./rotoiti.JPG";
import { HashRouter, Route, Link } from 'react-router-dom';

function Home() {
    // State handling for the Bottom Navigation component
    const [value, setValue] = React.useState(0);

    return (
        // Background image container (also the main container)
        <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                minHeight: "90vh",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden"
            }}

        >
            {/* Container for title and text */}

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    height: "auto",
                    width: "85vh",
                    borderRadius: "10px",
                    boxShadow: 1,
                    overflowY: "auto",
                }}
            >
                <h1>
                    <Typography sx={{ fontWeight: "bold", fontSize: 60, color: "white", fontFamily: "Sora" }}>
                        Hello! I'm Matt Romanes.
                    </Typography>
                </h1>

                <Box sx={{ width: "67%", marginBottom: "2%" }}>
                    <p>
                        <Typography sx={{ fontSize: 18, color: "white", fontFamily: "Sora" }}>
                            I'm a Computer Science student, Software Developer and technology enthusiast from Wellington, New Zealand.
                        </Typography>
                    </p>

                    <p>
                        <Typography sx={{ fontSize: 18, color: "white", fontFamily: "Sora" }}>
                            I describe myself as a passionate, team-oriented and hard-working individual who is
                            dedicated to creating better digital solutions.
                        </Typography>
                    </p>

                    <p>
                        <Typography sx={{ fontSize: 18, color: "white", fontFamily: "Sora" }}>
                            My most prominent languages are JavaScript, Java and Python. Additionally, I've worked with full-stack, DevOps,
                            cybersecurity and networking technology, both in my academics and employment.
                        </Typography>
                    </p>

                    <p>
                        <Typography sx={{ fontSize: 18, color: "white", fontFamily: "Sora" }}>
                            I'm currently in my final semester at Victoria University of
                            Wellington and a part-time Software Developer at CodeCamp.
                        </Typography>
                    </p>
                </Box>

                {/* Basically, the "footer" */}

                <BottomNavigation
                    showLabels display
                    value={value}
                    sx={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        marginBottom: "5%",
                        width: "40%"
                    }}
                >
                    <BottomNavigationAction icon={<a href="https://github.com/romanesmatt"> <GitHubIcon sx={{ color: "white", fontSize: "40px" }} /></a>} />
                    <BottomNavigationAction icon={<a href="https://www.linkedin.com/in/matt-romanes-860606153/"><LinkedInIcon sx={{ color: "white", fontSize: "40px" }} /></a>} />
                    <BottomNavigationAction icon={<a href="mailto:mattromanes@gmail.com"><EmailIcon sx={{ color: "white", fontSize: "40px" }} /></a>} />
                </BottomNavigation>

                <Typography sx={{ fontSize: 11, color: "white", marginBottom: "2%", fontFamily: "Sora" }}>
                    © Matt Romanes
                </Typography>
            </Box>

        </Box>
    );

}

export default function App() {
    return (
        <HashRouter basename="/">
            <Route exact path = '/homepage' component={<Home />} />
        </HashRouter>
    )


}

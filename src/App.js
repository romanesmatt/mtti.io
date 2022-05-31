import './App.css';
import * as React from 'react';
import { Box, Typography, Paper, Container, BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundImage from "./queenstown.JPG";

export default function App() {
    // State handling for the Bottom Navigation component
    const [value, setValue] = React.useState(0);

    // Responsive design

    return (
        // Background image container
        <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                minHeight: "100%",
                backgroundPosition: "center",
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
            {/* Main container of page */}
            <Box
                component="span"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "80%",
                    
                }}
            >

                {/* Container for title and text */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        height: "auto",
                        width: "50%",
                        borderRadius: "16px",
                        boxShadow: 1,
                        overflow: "auto"
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", fontSize: 60, color: "white", marginTop: "2%" }}>
                        Hello! I'm Matt Romanes.
                    </Typography>
                    <Box sx={{ width: "67%", marginBottom: "5%", marginTop: "2%", }}>
                        <p>
                            <Typography sx={{ fontSize: 20, color: "white" }}>
                                I am a Computer Science student, Software Developer and technology enthusiast from Wellington, New Zealand.
                            </Typography>
                        </p>

                        <p>
                            <Typography sx={{ fontSize: 20, color: "white" }}>
                                I'm a passionate, team-oriented and hard-working individual who wants to to create better digital solutions.
                                As a result, I'm seeking roles in Software Development and Cybersecurity that will help me achieve this goal.
                            </Typography>
                        </p>

                        <p>
                            <Typography sx={{ fontSize: 20, color: "white" }}>
                                My most prominent languages are JavaScript, Java and Python. I've worked with full-stack, DevOps,
                                cybersecurity and networking technology, both in my academics and employment.
                            </Typography>
                        </p>

                        <p>
                            <Typography sx={{ fontSize: 20, color: "white" }}>
                                I'm currently in my final semester at Victoria University of
                                Wellington and a part-time Software Developer at CodeCamp.
                            </Typography>
                        </p>
                    </Box>

                    {/* Basically, the "footer" */}

                    <BottomNavigation
                        showLabels display
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            marginBottom: "5%",
                            width: "100%"
                        }}
                    >
                        <BottomNavigationAction icon={<a href="https://github.com/romanesmatt"> <GitHubIcon sx={{ color: "white", fontSize: "50px" }} /></a>} />
                        <BottomNavigationAction icon={<a href="https://www.linkedin.com/in/matt-romanes-860606153/"><LinkedInIcon sx={{ color: "white", fontSize: "50px" }} /></a>} />
                        <BottomNavigationAction icon={<a href="mailto:mattromanes@gmail.com"><EmailIcon sx={{ color: "white", fontSize: "50px" }} /></a>} />
                    </BottomNavigation>

                    <Typography sx={{ fontSize: 12, color: "white", marginBottom: "2%" }}>
                        © Matt Romanes
                    </Typography>
                </Box>

            </Box>

        </Box>
    );
}

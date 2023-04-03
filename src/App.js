import './App.css';
import * as React from 'react';
import { Box, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundImage from "./rotoiti.JPG";

export default function App() {
    // State handling for the Bottom Navigation component

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
                    width: {
                        xs: 300,
                        sm: 700,
                        md: 800,
                        lg: 900,
                        xl: 1000,
                    },
                    borderRadius: "10px",
                    boxShadow: 1,
                    overflowY: "auto",
                    padding: "1rem",
                }}
            >
                <Typography
                    align="center"
                    variant="h1"
                    sx={{
                        fontWeight: "bold",
                        fontSize: 60,
                        color: "white",
                        fontFamily: "Sora",
                        overflow: "hidden",
                        wordWrap: "break-word",
                        marginBottom: "5rem",
                        marginTop: "1rem"
                    }}
                >
                    Hello! I'm Matt Romanes.
                </Typography>

                <Box sx={{ width: "67%" }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: 18,
                            color: "white",
                            fontFamily: "Sora",
                            marginBottom: "2rem"
                        }}
                    >
                        As a versatile technology enthusiast from Wellington, New Zealand, I excel in various software development roles with a team-oriented and persistent mindset. Skilled in Python, Java, JavaScript, and Swift, I am adept in frontend and full-stack development.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: 18,
                            color: "white",
                            fontFamily: "Sora",
                            marginBottom: "2rem",
                        }}
                    >
                        Leveraging experience in Azure DevOps and Git, I streamline workflows and foster collaboration. My knowledge extends to network monitoring, performance, and security through tools like NetBox and Zabbix.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: 18,
                            color: "white",
                            fontFamily: "Sora",
                            marginBottom: "2rem",
                        }}
                    >
                        Currently a Junior Network DevOps Engineer at Omega Networks, I focus on process automation and optimization. My diverse skillset makes me an ideal candidate for a wide range of positions within the technology sector.
                    </Typography>
                </Box>
                <BottomNavigation
                    showLabels display
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

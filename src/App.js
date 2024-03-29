import './App.css';
import * as React from 'react';
import { Box, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundImage from "./hawea.jpg";

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
                        I'm a software developer and technology enthusiast from Wellington, New Zealand. I'm also passionate
                        about aviation and am a keen badminton player and cyclist.
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
                        I'm currently a Junior Network DevOps Engineer at Omega Networks, where I am leading the development of a network monitoring application. 
                        This application has resulted in the implementation of more streamlined processes and a reduction in operational costs.
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
                   I am passionate about continuous learning and growth, and I thrive in collaborative environments where I can contribute my skills while learning 
                   from experienced professionals. I am seeking an opportunity to join a talented team where I can further develop my expertise in cutting-edge 
                   technologies and deliver high-quality software solutions.
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
                    © Matt Romanes | 2024
                </Typography>
            </Box>
        </Box>
    );


}

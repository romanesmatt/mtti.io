import './App.css';
import * as React from 'react';
import { Box, Typography, Paper, Container, BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundImage from "./queenstown.jpeg";

export default function App() {
   // State handling for the Bottom Navigation component
   const [value, setValue] = React.useState(0);

   return (
       // Background image container
       <div
           style={{
               backgroundImage: `url(${BackgroundImage})`,
               backgroundRepeat: 'no-repeat',
               height: '100vh',
               backgroundPosition: "center",
               backgroundSize: "cover"
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
               }}
           >

               {/* Container for title and text */}

               <Box
                   sx={{
                       display: "flex",
                       justifyContent: "center",
                       flexDirection: "column",
                       alignItems: "center",
                       backgroundColor: "black",
                       opacity: "90%",
                       height: "100wh",
                       width: "90vh",
                       borderRadius: "16px",
                       marginTop: "8%",
                       boxShadow: 1
                   }}
               >
                   <Typography sx={{ fontWeight: "bold", fontSize: 60, color: "white", marginTop: "2%" }}>
                       Hello! I'm Matt Romanes.
                   </Typography>
                   <Box sx={{ width: "67%", marginBottom: "5%", marginTop: "2%" }}>
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
                       showLabels
                       value={value}
                       onChange={(event, newValue) => {
                           setValue(newValue);
                       }}
                       sx={{
                           backgroundColor: "black",
                           marginBottom: "5%"
                       }}
                   >
                       <BottomNavigationAction icon={<a href="https://github.com/romanesmatt"> <GitHubIcon sx={{ color: "white", fontSize: "40px" }} /></a>} />
                       <BottomNavigationAction icon={<a href="https://www.linkedin.com/in/matt-romanes-860606153/"><LinkedInIcon sx={{ color: "white", fontSize: "40px" }} /></a>} />
                       <BottomNavigationAction icon={<a href="mailto:mattromanes@gmail.com"><EmailIcon sx={{ color: "white", fontSize: "40px" }} /></a>} />
                   </BottomNavigation>

                   <Typography sx={{ fontSize: 10, color: "white", marginBottom: "2%" }}>
                       © Matt Romanes
                   </Typography>
               </Box>

           </Box>

       </div>
   );
}

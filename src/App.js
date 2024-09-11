import React from "react";
import {
  Skills,
  Contact,
  Header,
  Home,
  Projects,
  Images,
  Timeline,
} from "./components";
import { ChakraProvider, Box, VStack, Container } from "@chakra-ui/react";

const collageImages = [
  "/imgs/hike.jpg",
  "/imgs/smashCompete.jpg",
  "/imgs/snowboard.jpg",
  "/imgs/profilePic.jpg",
];

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" overflow="hidden" position="relative">
        <Header />
        <Container maxW="container.xl" position="relative" zIndex={3}>
          <VStack spacing={20} align="stretch">
            <br />
            <Images images={collageImages} videoId="CfoeBOWMLL0" />
            <Home />
            <Timeline />
            <Projects />
            <Skills />
            <Contact />
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

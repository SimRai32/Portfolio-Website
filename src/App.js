import React from "react";
import {
  Skills,
  About,
  Contact,
  Header,
  Home,
  Projects,
  Timeline,
} from "./components";
import { ChakraProvider, Box, VStack, Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" overflow="hidden" position="relative">
        <Header />
        <Container maxW="container.xl" position="relative" zIndex={3}>
          <VStack spacing={20} align="stretch">
            <Home />
            <Timeline />
            <Projects />
            <About />
            <Skills />
            <Contact />
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

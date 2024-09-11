import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

export default function Home() {
  return (
    <Box as="section" id="home" display="flex" alignItems="center">
      <VStack spacing={8} align="start">
        <Heading
          as={motion.h1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          size="2xl"
        >
          Hi, I'm Simran Kalirai
        </Heading>
        <Text
          fontSize="xl"
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A passionate web developer creating amazing user experiences. When I'm
          not coding, you might find me rooting for my favorite hockey team (go
          Canucks!), shooting hoops and working on my shooting, or competing in
          Super Smash Brothers Melee tournaments. I love the thrill of the game
          and the community around it! If you're interested in watching me
          compete in a tournament, check out the video above. Let’s connect if
          you share any of these passions!
        </Text>
        <NavLink to="projects">
          <Button
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            colorScheme="blue"
            style={{ marginLeft: "-25px" }}
          >
            View My Work
          </Button>
        </NavLink>
      </VStack>
    </Box>
  );
}

import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box as="section" id="about">
      <Heading size="xl" mb={8}>
        About Me
      </Heading>
      <Text fontSize="lg">
        I'm a web developer with a passion for creating beautiful and functional
        websites. With experience in React, Node.js, and database management, I
        love tackling complex problems and turning ideas into reality.
      </Text>
    </Box>
  );
}

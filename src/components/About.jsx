import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box as="section" id="about">
      <Heading size="xl" mb={8}>
        About Me
      </Heading>
      <Text fontSize="lg">
        When I'm not coding, you might find me rooting for my favorite hockey
        team (go Canucks!), shooting hoops and working on my shooting, or
        competing in Super Smash Brothers Melee tournaments. I love the thrill
        of the game and the community around it! If you're interested in
        watching me compete in a tournament, check out the video above. Let’s
        connect if you share any of these passions!
      </Text>
    </Box>
  );
}

import { Box, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <Box as="section" id="contact">
      <Heading size="xl" mb={8}>
        Contact
      </Heading>
      <Text fontSize="lg" mb={4}>
        I'm always open to new opportunities. Feel free to reach out!
      </Text>
      <Flex>
        <Link href="https://github.com/SimRai32" isExternal mr={4}>
          <Icon as={FaGithub} w={8} h={8} />
        </Link>
        <Link href="https://linkedin.com/in/simrai32" isExternal mr={4}>
          <Icon as={FaLinkedin} w={8} h={8} />
        </Link>
        <Link href="mailto:kaliraisimran@gmail.com">
          <Icon as={FaEnvelope} w={8} h={8} />
        </Link>
      </Flex>
    </Box>
  );
}

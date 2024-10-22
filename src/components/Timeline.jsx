import React from "react";
import { Box, VStack, Heading, Text, Flex } from "@chakra-ui/react";

export default function Timeline() {
  const timelineItems = [
    {
      year: "May 2024 - Present",
      title: "Software Developer",
      company: "Eudara",
      description: "Leading frontend development for major projects.",
    },
    {
      year: "April 2023 - April 2024",
      title: "Software Developer",
      company: "Teifi Digital",
      description: "Developed and maintained multiple web applications.",
    },
    {
      year: "November 2022 - March 2023",
      title: "Full Stack Developer",
      company: "Fresh Stop",
      description: "Developed and maintained multiple web applications.",
    },
    // Add more items as needed
  ];

  return (
    <Box as="section" id="experience" py={10}>
      <Heading size="xl" mb={8}>
        Work Experience
      </Heading>
      <VStack spacing={8} align="stretch">
        {timelineItems.map((item, index) => (
          <Flex key={index}>
            <Box flexShrink={0} width="120px" textAlign="right" mr={8}>
              <Text fontWeight="bold">{item.year}</Text>
            </Box>
            <Box flex={1} pb={8} borderLeft="2px" borderColor="blue.500" pl={8}>
              <Heading size="md">{item.title}</Heading>
              <Text fontWeight="bold" mb={2}>
                {item.company}
              </Text>
              <Text>{item.description}</Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}

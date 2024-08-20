import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "Vue.js",
    "Python",
    "Polaris",
    "AWS",
    "Lambda",
    "S3",
    "Cloudwatch",
    "PostgreSQL",
    "GraphQL",
    "HTML/CSS",
    "Tailwind",
  ];

  return (
    <Box as="section" id="skills">
      <Heading size="xl" mb={8}>
        Skills
      </Heading>
      <SimpleGrid columns={[2, null, 3]} spacing={5}>
        {skills.map((skill, index) => (
          <Box key={index} p={5} shadow="md" borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">{skill}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

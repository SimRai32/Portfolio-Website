import { Box, Heading, Text, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "ESL Translator",
      description:
        "ESLtranslator is an easy and intuitive way for the user to learn english words and phrases by inputting them in their native language.",
      image:
        "https://github.com/jobinism/esltranslator/raw/main/docs/definitions.gif?raw=true",
      link: "https://github.com/SimRai32/esltranslator",
    },
  ];

  return (
    <Box as="section" id="projects">
      <Heading size="xl" mb={8}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

function ProjectCard({ title, description, image, link }) {
  return (
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={image} alt={title} />
        <Box p={6}>
          <Heading size="md" mb={2}>
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>
      </Box>
    </Link>
  );
}

import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export default function Images({ images, videoId }) {
  return (
    <Box width="100%" padding={4}>
      <SimpleGrid columns={2} spacing={4}>
        {images.map((image, index) => (
          <Box key={index} height="500px">
            {index === images.length - 1 && videoId ? (
              // Render the last image as a YouTube video link
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`YouTube video thumbnail for ${videoId}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </a>
            ) : (
              // Render the regular images
              <Image
                src={image}
                alt={`Collage image ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.05)" }}
              />
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

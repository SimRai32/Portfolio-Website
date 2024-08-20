import { Heading, Button, useColorMode, Flex } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";

function NavLink({ to, children }) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
    >
      <Button variant="ghost" mx={2}>
        {children}
      </Button>
    </ScrollLink>
  );
}
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      justifyContent="space-between"
      alignItems="center"
      p={4}
      bg={colorMode === "light" ? "white" : "gray.800"}
      boxShadow="md"
      zIndex={999}
    >
      <Heading size="md">Simran Kalirai</Heading>
      <Flex>
        <NavLink to="home">Home</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="experience">Work Experience</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <Button onClick={toggleColorMode} ml={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
}

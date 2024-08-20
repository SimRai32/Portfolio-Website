import { Link as ScrollLink } from "react-scroll";
import { Button } from "@chakra-ui/react";

export default function NavLink({ to, children }) {
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

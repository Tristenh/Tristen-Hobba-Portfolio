// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      width="100%"
      bgColor="gray.200"
      p="2" 
    >
      <Link key={1} to="/about" colorScheme="yellow">
        About Me
      </Link>
      <Link key={2} to="/portfolio">
        Portfolio
      </Link>
      <Link key={3} to="/contact">
        Contact
      </Link>
      <Link key={4} to="/resume">
        Resume
      </Link>
    </Box>
  );
}

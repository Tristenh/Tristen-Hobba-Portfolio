import { HStack, Center, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: "2rem",
    width: "100%",
  };

  return (
    <div style={footerStyle}>
      <Center mt={"5rem"} w="100vw">
        <HStack spacing={{ base: 16, md: 60 }}>
          <a href="https://github.com/Tristenh">
            <Icon
              as={AiFillGithub}
              boxSize={{ base: "50px", md: "75px" }}
            ></Icon>
          </a>
          <a href="https://www.linkedin.com/in/tristen-hobba-a06a131b3/">
            <Icon
              as={AiFillLinkedin}
              boxSize={{ base: "50px", md: "75px" }}
            ></Icon>
          </a>
        </HStack>
      </Center>
    </div>
  );
}

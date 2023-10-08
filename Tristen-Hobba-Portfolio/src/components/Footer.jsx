import { HStack, Center, Icon, Box } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%" bgColor="gray.200">
      <Center w="100vw">
            <h4>My Github 👉 </h4>
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
              <h4> 👈 My LinkedIn </h4>
      </Center>
    </Box>
  );
}

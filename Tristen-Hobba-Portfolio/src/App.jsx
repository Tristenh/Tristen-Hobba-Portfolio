// import `ChakraProvider` component
import { ChakraProvider, HStack, Center } from "@chakra-ui/react";
// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import Header
import Header from "./components/Header";

function App() {
  // Wrap ChakraProvider around Header at the root of app
  return (
    <ChakraProvider>
      <Header />
      <Outlet />
      <Center mt={"5rem"} w="100vw">
        <HStack spacing="150px">
          <a href="https://github.com/Tristenh">
            <AiFillGithub size={"50px"} />
          </a>
          <a href="https://www.linkedin.com/in/tristen-hobba-a06a131b3/">
            <AiFillLinkedin size={"50px"} />
          </a>
        </HStack>
      </Center>
    </ChakraProvider>
  );
}
export default App;

// import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
// import Header
import Header from "./components/Header";

function App() {
  // Wrap ChakraProvider around Header at the root of app
  return (
    <ChakraProvider>
      <Header />
      <Outlet />
    </ChakraProvider>
  );
}
export default App;

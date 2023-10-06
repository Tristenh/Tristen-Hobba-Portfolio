// import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
// import Header
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  // Wrap ChakraProvider around Content at the root of app
  return (
    <ChakraProvider>
      <Header />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}
export default App;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/profile.jpg";
export default function Nav({ links }) {
  return (
    <HStack>
      <Image src={logo} boxSize='150px' />
      {links.map((link) => link)}
      <Text>Tristen Hobba's Portfolio</Text>
    </HStack>
  );
}

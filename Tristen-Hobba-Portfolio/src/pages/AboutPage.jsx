import { Box, Avatar, Heading, Text } from "@chakra-ui/react";
import logo from "../assets/profile.jpg";

export default function AboutPage() {
  return (
    <Box  >
      <Heading mt={10} as="h1">About me</Heading>
      <Avatar mt={10} src={logo} size="2xl" />
      <Text mt={10}>
        Hello, I'm Tristen Hobba, and I warmly welcome you to explore my
        profile. At present, I'm immersed in the world of coding as a student at
        Sydney University's esteemed coding bootcamp. Outside of my coding
        endeavors, I find solace and inspiration in the great outdoors. The
        beauty of nature has always captivated me, and I frequently find myself
        venturing into the wilderness for rejuvenating camping trips with my
        brothers. Additionally, I enjoy indulging in invigorating bush walks,
        allowing me to immerse myself fully in the splendor of the natural
        world.
      </Text>
    </Box>
  );
}

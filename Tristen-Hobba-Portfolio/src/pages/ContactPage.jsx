import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <form>
      <Center mt={"5rem"}  maxW="100vw">
        <FormControl>
          <FormLabel>Contact form:</FormLabel>
          <FormLabel>Name:</FormLabel>
          <Input type="text" />
          <FormLabel>Email address:</FormLabel>
          <Input type="email" />
          <FormLabel>Message:</FormLabel>
          <Input type="text" />
          <Center>
          <Button w={"20rem"} mt={"2rem"} colorScheme="green">Submit</Button>
          </Center>
        </FormControl>
      </Center>
    </form>
  );
}

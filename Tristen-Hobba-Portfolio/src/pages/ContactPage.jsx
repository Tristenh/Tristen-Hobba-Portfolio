import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

// Here we import a helper function that will check if the email is valid

export default function ContactPage() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "message") {
      setMessageName(inputValue);
    }
  };
  const handleBlur = (e) => {
    // This function is called when an input field loses focus (on blur)
    const { name, value } = e.target;

    // Check for errors when an input field loses focus
    if (
      (name === "email" && !validateEmail(value)) ||
      (name === "userName" && !value)
    ) {
      setErrorMessage("Email or username is invalid");
    } else if (name === "message" && !value) {
      setErrorMessage("Message is required");
    } else {
      // Clear the error message if there are no errors
      setErrorMessage("");
    }
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Clear the error message if there are no errors
    setErrorMessage("");
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    if (!message) {
      setErrorMessage("Message is invalid");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setEmail("");
    setMessageName("");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Center mt={"5rem"} maxW="100vw">
          <FormControl>
            <FormLabel>Contact form:</FormLabel>
            <FormLabel>Name:</FormLabel>
            <Input
              value={userName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              name="userName"
              type="text"
            />
            <FormLabel>Email address:</FormLabel>
            <Input
              value={email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="email"
              name="email"
            />
            <FormLabel>Message:</FormLabel>
            <Input
              value={message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="text"
              name="message"
            />
            <Center>
              <Button type="submit" w={"20rem"} mt={"2rem"} colorScheme="green">
                Submit
              </Button>
            </Center>
          </FormControl>
        </Center>
      </form>
      {errorMessage && (
        <div>
          <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
      )}
    </>
  );
}

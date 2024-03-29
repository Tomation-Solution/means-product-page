"use client";

import {
  Flex,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import addData from "../../logic/firebase/db";
import { v4 as uuid } from "uuid";

export function useAppToast() {
  return useToast({
    position: "top-right",
    isClosable: true,
  });
}

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [path, setPath] = useState("");
  const [error, setError] = useState(false);
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState("Submit");

  const toast = useAppToast();
        const id = uuid();

  async function handleRegistration(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    console.log("clicked");
    if (name === "" || email === "" || telephone === "" || path === "") {
      return setError(true);
    } else {
      const data = { name, email, telephone, path };
      setLoader("Loading...");
      const { result, error } = await addData(
        "training-registration",
        id,
        data
      );

      if (error) {
        setLoader("Submit");
        toast({
          status: "error",
          description: "An error occurred",
        });
        return console.log(error);
      } else {
        setLoader("Submit");
        toast({
          status: "success",
          description: result || "Registration Successful",
        });
        name = ''
        telephone = ''
        path = ''
        email = ''
      }
    }
  }

  return (
    <Box
      pt={{ base: "30%", lg: "10%" }}
      px="5%"
      h={{ base: "87vh", lg: "100%" }}
    >
      <Text
        fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
        fontWeight={"bold"}
        color={"gray.700"}
        textAlign="center"
      >
        BUSINESS REGISTRATION
      </Text>
      <Flex
        flexDirection="column"
        width={{ base: "100%", lg: "50%" }}
        gap="5"
        py={{ base: "5%", lg: "2%" }}
      >
        <FormControl>
          <FormLabel fontWeight={"500"} fontSize={"16px"}>
            Name
          </FormLabel>
          <Input
            size="md"
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            color={"#1F1F1F"}
            fontWeight={"400"}
            py={"s-2"}
            fontSize={"15px"}
            bg={"#F4F6F6"}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={"500"} fontSize={"16px"}>
            Email
          </FormLabel>
          <Input
            size="md"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            color={"#1F1F1F"}
            fontWeight={"400"}
            py={"s-2"}
            fontSize={"15px"}
            bg={"#F4F6F6"}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={"500"} fontSize={"16px"}>
            Telephone
          </FormLabel>
          <Input
            size="md"
            type="tel"
            value={telephone}
            placeholder="Enter telephone"
            onChange={(e) => setTelephone(e.target.value)}
            color={"#1F1F1F"}
            fontWeight={"400"}
            py={"s-2"}
            fontSize={"15px"}
            bg={"#F4F6F6"}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={"500"} fontSize={"16px"}>
            Present Career Path/Discipline
          </FormLabel>
          <Input
            size="md"
            type="text"
            value={path}
            placeholder="Enter career path/discipline"
            onChange={(e) => setPath(e.target.value)}
            color={"#1F1F1F"}
            fontWeight={"400"}
            py={"s-2"}
            fontSize={"15px"}
            bg={"#F4F6F6"}
          />
        </FormControl>
        <Text color="red.400">{err}</Text>
      </Flex>
      {error &&
        name === "" ||
        path === "" ||
        telephone === "" ||
        email === "" || (
          <Text color="red.400">Please ensure you fill all fields</Text>
        )}
      <Button
        variant={"main"}
        maxW={{ lg: "320px" }}
        w={"100%"}
        mt={{ base: "5%", lg: "3%" }}
        mb={{ base: "20%", lg: "5%" }}
        onClick={handleRegistration}
      >
        {loader}
      </Button>
    </Box>
  );
}

export default Register;

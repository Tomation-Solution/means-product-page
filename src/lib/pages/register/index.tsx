"use client";

import {
  Flex,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Text,
  Image
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import addData from "../../logic/firebase/db";
import { Timestamp } from "firebase/firestore";
import { sendRegistrationSuccessEmail } from "../../utils/email";

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
  const [loader, setLoader] = useState("Submit");

  const toast = useAppToast();

  async function handleRegistration(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    if (name === "" || email === "" || telephone === "" || path === "") {
      return setError(true);
    } else {
      const data = {
        name,
        email,
        telephone,
        path,
        createdAt: Timestamp.fromDate(new Date()),
      };
      setLoader("Loading...");
      const { result, error } = await addData(
        "training-registration",
        email.toLowerCase(),
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
        const res = await sendRegistrationSuccessEmail({
          toName: name,
          toEmail: email.toLowerCase(),
        });
        if (res) {
          toast({
            status: "success",
            description:
              "Registration successful! A mail will be sent to you soon"
          });
        }
        setLoader("Submit");
        setName("");
        setPath("");
        setTelephone("");
        setEmail("");
      }
    }
  }

  return (
    <Box pt={{ base: "30%", lg: "10%" }} px="5%" h="100%">
      <Text
        fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
        fontWeight={"bold"}
        color={"gray.700"}
        textAlign="center"
      >
        TRAINING REGISTRATION
      </Text>
      <Flex
        flexDirection={{ base: "column-reverse", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        width="100%"
        pb="10%"
      >
        <Box width={{ base: "100%", lg: "47%" }}>
          <Flex flexDirection="column" gap="5" py={{ base: "5%", lg: "2%" }}>
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
          </Flex>
          {(error && name === "") ||
            path === "" ||
            telephone === "" ||
            (email === "" && (
              <Text color="red.400">Please ensure you fill all fields</Text>
            ))}
          <Button
            variant={"main"}
            maxW={{ lg: "320px" }}
            w={"100%"}
            mt={{ base: "5%", lg: "3%" }}
            mb={{ base: "20%", lg: "5%" }}
            onClick={handleRegistration}
            isDisabled={
              name === "" || path === "" || telephone === "" || email === ""
            }
          >
            {loader}
          </Button>
        </Box>

        <Box width={{ base: "100%", lg: "45%" }} py={{ base: "5%", lg: "2%" }}>
          <Box w={{ base: "100%", lg: "100%" }} pb='20px'>
            <Image alt="" src={"/bpm.jpeg"} borderRadius="10px" />
          </Box>
          <Text>
            Are you passionate about helping organizations streamline business
            processes, optimize performance, and drive organizational success?{" "}
            <br /> Considering picking up another career path? Our comprehensive
            Business Process Management Training program is designed for
            individuals like you.
          </Text>
          <Text>
            Whether you&apos;re a recent graduate, a career changer, or an
            aspiring professional, this course will equip you with essential
            skills to thrive in the Business Process Management domain.
          </Text>

          <Text
            fontSize={{ base: "1.5rem" }}
            fontWeight={"bold"}
            color={"gray.700"}
            textAlign="center"
            py="1rem"
          >
            Why Choose Our BPM Career Training?
          </Text>
          <ol>
            <li>Practical Learning</li>
            <li>Expert Faculty</li>
            <li>
              Creative Pathways: Explore diverse career paths within BPM,
              including:
              <ul>
                <li>Business Process Consultant</li>
                <li>Operations Improvement Manager </li>
                <li>Operations Excellence Manager</li>
                <li>Process Documentation Analyst</li>
                <li>Process Improvement Analyst</li>
                <li>Internal Control System & Compliance Analyst</li>
              </ul>
            </li>
          </ol>
        </Box>
      </Flex>
    </Box>
  );
}

export default Register;

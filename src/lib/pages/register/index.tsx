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
import { ChangeEvent, Key, useState, useEffect } from "react";


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [path, setPath] = useState("");
    
  return (
    <Box pt={{ base: "30%", lg: "10%" }} px="5%" h={{base:'87vh', lg:'100%'}}>
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
      </Flex>
      <Button variant={"main"} maxW={{lg:"320px"}} w={"100%"} mt={{base:'5%', lg:'3%'}} mb={{ base:'20%',lg:'5%'}}>
        Submit
      </Button>
    </Box>
  );
}

export default Register;

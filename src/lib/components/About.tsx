"use client";

import { Flex, Text, Button, Heading, Box } from "@chakra-ui/react";
import {
  Gallery,
  Messages3,
  NoteText,
  People,
  UserOctagon,
  Video,
} from "iconsax-react";
import { Icon } from "@chakra-ui/icons";

export function About() {
  return (
    <Box>
      <Flex className="missionBg " justifyContent='center' align='center'>
        <Flex
          gap={{ base: "10px", lg: "15px", xl: "20px" }}
          direction={"column"}
          align={"center"}
          className="textBg2"
          px={"5%"}
          pt={{ base: "10%", lg: "10%" }}
          pb={{ base: "10%", lg: "10%" }}
        >
          <Text
            fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
            fontWeight={"bold"}
            color={{ base: "gray.800", lg: "gray.900" }}
          >
            OUR MISSION
          </Text>
          <Text
            fontSize={"1rem"}
            color={{ base: "gray.800", lg: "gray.900" }}
            maxW={{ base: "100%", lg: "50%" }}
            display="inline-block"
            textAlign={"center"}
            p={"1"}
          >
            Our mission is to{" "}
            <b>
              bridge the gap between theory and practice, equipping
              professionals with the skills needed to drive efficiency,
              innovation, and growth.
            </b>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

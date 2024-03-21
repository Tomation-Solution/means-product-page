"use client";

import { Flex, Text, Button, Heading } from "@chakra-ui/react";
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
    <Flex
      px={"5%"}
      pt={{ base: "10%", lg: "5%" }}
      pb={{ base: "10%", lg: "10%" }}
      gap={{ base: "10px", lg: "15px", xl: "20px" }}
      direction={"column"}
      align={"center"}
      bg={"primary.sub___"}
      className="missionBg"
    >
      <Text
        fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
        fontWeight={"bold"}
        color={{ base:'gray.800', lg:"gray.700"}}
      >
        OUR MISSION
      </Text>
      <Text
        fontSize={"1rem"}
        color={{ base:'gray.800', lg:"gray.700"}}
        maxW={{ base: "100%", lg: "50%" }}
        textAlign={"center"}
        className='textBg2'
        p={'1'}
      >
        Our mission is to{" "}
        <b>
          bridge the gap between theory and practice, equipping professionals
          with the skills needed to drive efficiency, innovation, and growth.
        </b>
      </Text>
    </Flex>
  );
}

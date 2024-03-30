"use client";

import { Flex, Text, VStack, Box, Image, Button } from "@chakra-ui/react";
import {
  Gallery,
  Messages3,
  NoteText,
  People,
  UserOctagon,
  Video,
} from "iconsax-react";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";

export function Expertise() {
  return (
    <Flex
      px={"5%"}
      py={{ base: "10%", lg: "5%" }}
      gap={{ base: "10px", lg: "15px", xl: "20px" }}
      direction={"column"}
      align={"center"}
    >
      <Text
        fontSize={{ base: "2rem", lg: "3.4rem", xl: "3.6rem" }}
        fontWeight={"bold"}
        color={"primary.sub"}
      >
        OUR EXPERTISE
      </Text>
      <VStack gap={{ base: "3.5rem", lg: "6rem" }}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap="2.5rem"
          justifyContent={"space-between"}
        >
          <Flex
            justifyContent="center"
            gap={{ base: "1rem", lg: "1.5rem" }}
            flexDirection={{ base: "column", lg: "column" }}
            w={{ base: "100%", lg: "50%" }}
          >
            <Text
              fontSize={"1.5rem"}
              color={"gray.600"}
              fontWeight="600"
              textAlign={"start"}
            >
              Training and Development:
            </Text>
            <Text fontSize={"1.1rem"} color={"gray.600"} textAlign={"start"}>
              - Our customized training programs empower professionals with
              practical skills in BPM and performance management.
              <br />- We believe in bridging theory and practice, ensuring that
              your team can drive efficiency and innovation.
              <br />- We offer customized training programs that cater to
              diverse industries and roles.
              <br />- Our expert trainers deliver practical insights on BPM,
              performance measurement, and continuous improvement. Whether
              you&apos;re an executive, manager, or frontline employee, our
              training ensures you stay ahead in today&apos;s dynamic business
              landscape.
            </Text>
            <Link href="/register">
              <Button maxW={"55%"} variant={"cta"}>
                Register For a Training
              </Button>
            </Link>
          </Flex>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image alt="" src={"/strat1.jpeg"} borderRadius="10px" />
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", lg: "row-reverse" }}
          gap="2.5rem"
          justifyContent={"space-between"}
        >
          <Flex
            justifyContent="center"
            gap={{ base: "1rem", lg: "1.5rem" }}
            flexDirection={{ base: "column", lg: "column" }}
            w={{ base: "100%", lg: "50%" }}
          >
            <Text
              fontSize={"1.5rem"}
              color={"gray.600"}
              fontWeight="600"
              textAlign={"start"}
            >
              Strategic Staffing Solutions:
            </Text>
            <Text fontSize={"1.1rem"} color={"gray.600"} textAlign={"start"}>
              - Finding the right talent is critical for organizational success.
              <br />- We specialize in staffing for BPM and performance
              management roles. <br />- Our extensive network connects skilled
              professionals with companies seeking expertise in process
              optimization, data analysis, and performance measurement.
            </Text>
            <Link href="#contact">
              <Button maxW={"55%"} variant={"cta"}>
                Contact Us
              </Button>
            </Link>
          </Flex>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image alt="" src={"/strat2.jpeg"} borderRadius="10px" />
          </Box>
        </Flex>

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap="2.5rem"
          justifyContent={"space-between"}
        >
          <Flex
            justifyContent="center"
            gap={{ base: "1rem", lg: "1.5rem" }}
            flexDirection={{ base: "column", lg: "column" }}
            w={{ base: "100%", lg: "50%" }}
          >
            <Text
              fontSize={"1.5rem"}
              color={"gray.600"}
              fontWeight="600"
              textAlign={"start"}
            >
              Outsourcing Services:
            </Text>
            <Text fontSize={"1.1rem"} color={"gray.600"} textAlign={"start"}>
              - Process and performance management analysts play a pivotal role
              in driving organizational success. <br />- We provide outsourced
              analysts who bring fresh perspectives, data-driven insights, and
              best practices to your business. <br />- Our seasoned analysts
              provide fresh insights and actionable recommendations for your
              staffing needs when it comes to BPM and Performance Management
              Staffing. <br />- Whether you need short-term project support or
              long-term strategic guidance, our analysts are here to elevate
              your performance.
            </Text>
            <Link href="#contact">
              <Button maxW={"55%"} variant={"cta"}>
                Contact Us
              </Button>
            </Link>
          </Flex>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image alt="" src={"/strat3.jpeg"} borderRadius="10px" />
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}

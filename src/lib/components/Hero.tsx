"use client";

import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import {
  Chart,
  Diagram,
  NoteText,
  People,
  UserOctagon,
  Video,
} from "iconsax-react";
import { Icon } from "@chakra-ui/icons";
import { Heading } from "../../lib/components/Heading";

export function Hero() {
  return (
    <>
      {/* <Flex
        px={"5%"}
        pt={{ base: "20%", lg: "10%" }}
        pb={{ base: "10%", lg: "17%" }}
        gap={{ base: "50px", lg: "90px", xl: "110px" }}
        direction={"column"}
        className="headerBg"
      >
        <Flex direction={"column"} gap={"2rem"} alignItems="center">
          <Heading text={"The Means Solutions"} />
          <Text
            fontSize={{ base: "1.2rem", lg: "1.3rem" }}
            color={{ base: "white", lg: "white" }}
            w={{ base: "80%", lg: "50%" }}
            textAlign="center"
            fontWeight="500"
            className="textBg"
          >
            We are dedicated to transforming organizations through strategic
            training, staffing, and outsourcing solutions.
          </Text>
          <Button maxW={"55%"} variant={"cta"}>
            Request a demo!
          </Button>
        </Flex>
      </Flex> */}

      <Flex
        px={"5%"}
        pt={{ base: "20%", lg: "10%" }}
        pb={"5%"}
        gap={{ base: "50px", lg: "90px", xl: "110px" }}
        direction={"column"}
        h={{lg:"600px"}}
      >
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          align={{ base: "flex-start", lg: "center" }}
          justify={"space-between"}
          gap={{ base: 10, lg: 0 }}
        >
          <Flex
            direction={"column"}
            maxW={{ base: "100%", lg: "40%" }}
            gap={"1rem"}
          >
            <Text fontSize={"2.2rem"} color={"gray.700"} fontWeight="500">
              We are dedicated to transforming organizations through strategic
              training, staffing, and outsourcing solutions.
            </Text>
            <Button maxW={"55%"} variant={"cta"}>
              Request a demo!
            </Button>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            position="relative"
            direction={"column"}
            maxW={{ base: "100%", lg: "50%" }}
          >
            <Box>
              <Image
                alt=""
                src={"/pic1.jpeg"}
                w={{ sm: "100%", lg: "80%" }}
                borderRadius="10px"
                boxShadow={"0 20px 25px rgba(0, 0, 0, 0.5)"}
              />
            </Box>
            <Box top="75%" left={{lg:"30%"}} zIndex="35" position="absolute">
              <Image
                alt=""
                src={"/pic2.jpeg"}
                boxShadow={"0 20px 25px rgba(0, 0, 0, 0.5)"}
                w={{ sm: "80%", lg: "100%" }}
                borderRadius="10px"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box pt={{ base: "5%", lg: "10%" }} pb={"5%"} px={"5%"}>
        <Text
          fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
          fontWeight={"bold"}
          color={"black"}
          align="start"
          pb="1.5rem"
          maxW={{ base: "100%", lg: "60%" }}
        >
          Let us guide you towards operational excellence and sustainable
          growth.
        </Text>
        <Flex
          gap={"2rem"}
          align={"center"}
          flexWrap={"wrap"}
          justifyContent="flex-start"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex justifyContent="flex-start" alignItems="start" mt={"2rem"}>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              maxW={{ base: "100%", lg: "50%" }}
              textAlign={"start"}
            >
              At The Means Solutions Consulting, we are passionate about
              empowering organizations to achieve operational excellence through
              effective Business Process Management (BPM) and Performance
              Management training and staffing services.
            </Text>
          </Flex>
          <Flex
            bg="primary.sub___"
            px={"1rem"}
            py={".7rem"}
            gap={".7rem"}
            align={"center"}
            justifyContent="center"
            borderRadius={"10px"}
            boxShadow={"xl"}
          >
            <Icon
              as={Diagram as any}
              color={"secondary.sub_"}
              fontSize={"1.5rem"}
            />
            <Text fontSize={{ base: ".8rem", lg: ".9rem" }} fontWeight={"bold"}>
              Business Process Management
            </Text>
          </Flex>
          <Flex
            bg="primary.sub___"
            px={"1rem"}
            py={".7rem"}
            gap={".7rem"}
            align={"center"}
            borderRadius={"10px"}
            boxShadow={"xl"}
          >
            <Icon
              as={Chart as any}
              color={"secondary.sub_"}
              fontSize={"1.5rem"}
            />
            <Text fontSize={{ base: ".8rem", lg: ".9rem" }} fontWeight={"bold"}>
              Performance Management
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

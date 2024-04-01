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
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import {useState} from 'react'

export function Hero() {
  const [btn, setBtn] = useState({name: 'Contact Us', path: '#contact' });
  return (
    <>
      <Flex
        px={"5%"}
        pt={{ base: "20%", lg: "10%" }}
        pb={"5%"}
        gap={{ base: "50px", lg: "90px", xl: "110px" }}
        direction={"column"}
        h={{ lg: "600px" }}
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
            mt={{ base: "35%", lg: "10%" }}
            alignItems={{ base: "center", lg: "start" }}
          >
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "We are dedicated to transforming organizations through strategic training, staffing, and outsourcing solutions.",
                () => setBtn({name:'Register For a Training', path: '/register'}),
                5000,
                "Business Process Management Career Development Program.",
                5000,
                () => setBtn({name: 'Contact Us', path: '#contact'}),
                "Let's help you through your staffing needs for your Business Process Management Workforce",
                500,
              ]}
              speed={50}
              style={{ fontSize: "2.3rem", fontWeight: "600", color: "black" }}
              repeat={Infinity}
            />
            <Box w="600px">
              <Link href={btn.path}>
                <Button maxW={"55%"} variant={"cta"} px="10px">
                  {btn.name}
                </Button>
              </Link>
            </Box>
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
            <Box
              top="75%"
              left={{ base: "9%", lg: "30%" }}
              zIndex="35"
              position="absolute"
            >
              <Image
                alt=""
                src={"/pic2.jpeg"}
                boxShadow={"0 20px 25px rgba(0, 0, 0, 0.5)"}
                w={{ base: "80%", lg: "100%" }}
                boxSize={{ base: "90%", lg: "none" }}
                borderRadius="10px"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box pt={{ base: "10%", lg: "14%", xl: "18%", '2xl': '26%' }} pb={"8%"} px={"5%"}>
        <Text
          fontSize={{ base: "2.5rem", lg: "4rem", xl: "4.6rem" }}
          fontWeight={"bold"}
          color={"black"}
          textAlign={{ base: "center", lg: "center" }}
          pb={{ base: ".5rem", lg: "1.5rem" }}
          maxW={{ base: "100%", lg: "100%" }}
        >
          Let us guide you towards operational excellence and sustainable
          growth.
        </Text>
        <Flex
          gap={"2rem"}
          align={"center"}
          flexWrap={"wrap"}
          justifyContent="center"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex justifyContent="center" alignItems="center" mt={"2rem"}>
            <Text
              fontSize={"1.2rem"}
              color={"gray.600"}
              maxW={{ base: "100%", lg: "50%" }}
              textAlign={{ base: "center", lg: "center" }}
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
              as={People as any}
              color={"secondary.sub_"}
              fontSize={"1.5rem"}
            />
            <Text fontSize={{ base: ".8rem", lg: ".9rem" }} fontWeight={"bold"}>
              Staffing
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

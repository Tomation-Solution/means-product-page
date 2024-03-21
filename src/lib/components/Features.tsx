"use client";

import { Flex, Text, Grid, GridItem, Box } from "@chakra-ui/react";
import {
  LampCharge,
  TickCircle,
  Designtools,
  People,
  Global,
  CalendarTick,
} from "iconsax-react";
import { Icon } from "@chakra-ui/icons";

interface FeatureCardProps {
  name: string;
  desc?: string | undefined;
  icon: any;
}

export function Features() {
  const features: FeatureCardProps[] = [
    {
      name: "EXPERTISE",
      icon: LampCharge as any,
      desc: " Our training and staffing team comprises seasoned professionals with hands-on experience in BPM, performance measurement, and staffing.",
    },
    {
      name: "CUSTOM SOLUTIONS",
      icon: Designtools as any,
      desc: "We tailor our services to meet your unique needs, ensuring practical, actionable results.",
    },
    {
      name: "RESULT DRIVEN",
      icon: TickCircle as any,
      desc: "We focus on tangible outcomes—taking the burden of BPM and Performance Management staffing and training needs totally off your desk towards boosting your bottom line. ",
    },
    {
      name: "COLLABORATION",
      icon: People as any,
      desc: "We believe in partnerships. Let's work together to achieve your organizational goals.",
    },
    {
      name: "EVENTS & VIRTUAL MEETINGS",
      icon: CalendarTick as any,
      desc: "Let's work together to tailor solutions that align with your unique goals.",
    },
    {
      name: "GLOBAL PERSPECTIVE",
      icon: Global as any,
      desc: "Our team brings diverse experiences and a global mindset to every project.",
    },
  ];

  return (
    <Box py={{ base: "10%", lg: "5%" }}>
      <Text
        fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
        fontWeight={"bold"}
        color={"gray.700"}
        textAlign="center"
      >
        WHY CHOOSE THE MEANS SOLUTIONS?
      </Text>
      <Grid
        px={{ base: "5%", lg: "17.5%" }}
        py={{ base: "10%", lg: "5%" }}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={"50px"}
      >
        {features.map((feature, idx) => (
          <GridItem key={idx}>
            <FeatureCard {...feature} key={feature.name} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align={{ base: "flex-start", lg: "center" }}
      gap={"1rem"}
    >
      <Flex
        borderColor={"secondary.sub__"}
        borderRadius={"100%"}
        borderWidth={"3px"}
        p={"2rem"}
        justify={"center"}
        align={"center"}
      >
        <Icon as={props.icon} color={"secondary.sub"} fontSize={"3rem"} />
      </Flex>
      <Flex direction={"column"} align={"flex-start"}>
        <Text fontWeight={"bold"} color={"gray.700"}>
          {props.name}
        </Text>
        <Text color={"gray.500"} textAlign={"justify"}>
          {props.desc ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" +
              "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </Text>
      </Flex>
    </Flex>
  );
}

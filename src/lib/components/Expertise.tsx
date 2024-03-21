"use client";

import { Flex, Text, VStack } from "@chakra-ui/react";
import {
  Gallery,
  Messages3,
  NoteText,
  People,
  UserOctagon,
  Video,
} from "iconsax-react";
import { Icon } from "@chakra-ui/icons";

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
        fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
        fontWeight={"bold"}
        color={"gray.700"}
      >
        OUR EXPERTISE
      </Text>
      <VStack gap={{ base: "2.5rem", lg: "2rem" }}>
        <Flex flexDirection="column" gap="1.5rem">
          <Text
            fontSize={"1.5rem"}
            color={"gray.600"}
            fontWeight="600"
            textAlign={{ base: "start", lg: "center" }}
          >
            Training and Development:
          </Text>
          <Flex
            justifyContent="space-between"
            gap="1rem"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Our customized training programs empower professionals with
              practical skills in BPM and performance management.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              We believe in bridging theory and practice, ensuring that your
              team can drive efficiency and innovation.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              We offer customized training programs that cater to diverse
              industries and roles.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Our expert trainers deliver practical insights on BPM, performance
              measurement, and continuous improvement.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Whether you&apos;re an executive, manager, or frontline employee,
              our training ensures you stay ahead in today&apos;s dynamic
              business landscape.
            </Text>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="1.5rem">
          <Text
            fontSize={"1.5rem"}
            color={"gray.600"}
            fontWeight="600"
            textAlign={{ base: "start", lg: "center" }}
          >
            Strategic Staffing Solutions:{" "}
          </Text>
          <Flex
            justifyContent="space-between"
            gap="1rem"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Finding the right talent is critical for organizational success.
              We specialize in staffing for BPM and performance management
              roles.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Our extensive network connects skilled professionals with
              companies seeking expertise in process optimization, data
              analysis, and performance measurement.
            </Text>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="1.5rem">
          <Text
            fontSize={"1.5rem"}
            color={"gray.600"}
            fontWeight="600"
            textAlign={{ base: "start", lg: "center" }}
          >
            Outsourcing Services:
          </Text>
          <Flex
            justifyContent="space-between"
            gap="1rem"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Process and performance management analysts play a pivotal role in
              driving organizational success.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              We provide outsourced analysts who bring fresh perspectives,
              data-driven insights, and best practices to your business.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Our seasoned analysts provide fresh insights and actionable
              recommendations for your staffing needs when it comes to BPM and
              Performance Management Staffing.
            </Text>
            <Text
              fontSize={"1rem"}
              color={"gray.600"}
              w={{ base: "100%", lg: "40%" }}
              textAlign={"start"}
            >
              Whether you need short-term project support or long-term strategic
              guidance, our analysts are here to elevate your performance.
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
}

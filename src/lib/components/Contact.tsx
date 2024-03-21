"use client";

import { Flex, Text, Button, Heading } from "@chakra-ui/react";
import {
  Gallery,
  Chart,
  Call,
  Global,
  Sms,
  UserOctagon,
  Video,
} from "iconsax-react";
import { Icon } from "@chakra-ui/icons";

export function Contact() {
  return (
    <Flex
      px={"5%"}
      py={{ base: "10%", lg: "5%" }}
      gap={{ base: "10px", lg: "15px", xl: "20px" }}
      direction={"column"}
      align={"center"}
      bg={"primary.sub___"}
      className="contactBg"
    >
      <Text
        fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
        fontWeight={"bold"}
        color={"gray.200"}
      >
        CONTACT US
      </Text>

      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        gap="2rem"
      >
        <Text
          w={{ base: "100%", lg: "30%" }}
          fontSize={"1rem"}
          color={"gray.200"}
          fontWeight="500"
        >
          Ready to optimize your processes and elevate performance? Reach out to
          us today for the required training and staffing:
        </Text>

        <Flex w={{ base: "100%", lg: "30%" }} flexDirection="column" gap="1rem">
          <Flex gap={".7rem"} align={"center"}>
            <Icon
              as={Sms as any}
              color={"secondary.sub_"}
              fontSize={"1.5rem"}
            />
            <a href="mailto:info@themeanssolutions.com">
              <Text fontSize=".9rem" fontWeight={"bold"} color={"gray.200"}>
                info@themeanssolutions.com
              </Text>
            </a>
          </Flex>

          <Flex gap={".7rem"} align={"center"}>
            <Icon
              as={Call as any}
              color={"secondary.sub_"}
              fontSize={"1.5rem"}
            />
            <a href="tel:+1 (469) 583-3926">
              <Text fontSize=".9rem" fontWeight={"bold"} color={"gray.200"}>
                +1 (469) 583-3926
              </Text>
            </a>
          </Flex>

          <Flex gap={".7rem"} align={"center"}>
            <Icon
              as={Global as any}
              color={"secondary.sub_"}
              fontSize={"1.5rem"}
            />
            <a
              target="blank"
              rel="_noreferrer"
              href="https://www.themeanssolutions.com"
            >
              <Text fontSize=".9rem" fontWeight={"bold"} color={"gray.200"}>
                www.themeanssolutions.com
              </Text>
            </a>
          </Flex>
        </Flex>

        <Text
          w={{ base: "100%", lg: "30%" }}
          fontSize={"1rem"}
          color={"gray.100"}
          fontWeight="500"
        >
          Join us on this journey toward excellence. Let&apos;s transform your
          business, one process at a time!
        </Text>
      </Flex>
    </Flex>
  );
}

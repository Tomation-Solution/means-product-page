"use client";

import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";
import { CloseSquare, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      direction={"column"}
      position={"fixed"}
      top={0}
      zIndex={50}
      w={"100%"}
    >
      <Flex
        px={"5%"}
        py={"1rem"}
        justify={"space-between"}
        align={"center"}
        borderBottomWidth={1}
        w={"100%"}
        bg={"white"}
      >
        <Link href={"/"}>
          <Flex cursor={"pointer"} align={"center"} gap={".7rem"}>
            <Image alt={"means logo"} src={"/log.jpeg"} w={"5.5rem"} />
            {/* <Text fontSize={"1.6rem"} fontWeight={"bold"} color={"primary.sub"}>
              MEANS
            </Text> */}
          </Flex>
        </Link>
        <Flex gap={"1rem"} align={"center"}>
          <Button variant={"sub"} display={{ base: "none", lg: "flex" }}>
            Post a Job
          </Button>
            <Button variant={"main"} display={{ base: "none", lg: "flex" }}>
              Vacancy
            </Button>
          <Link href='#contact'>
          <Button variant={"main"} display={{ base: "none", lg: "flex" }}>
            Contact Us
          </Button>
          </Link>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            display={{ base: "flex", lg: "none" }}
            variant={"sub"}
            px={{ base: "1rem", lg: "1.2rem" }}
            fontSize={"1.2rem"}
            aria-label={"menu"}
            icon={
              <Icon
                as={isOpen ? CloseSquare : (HambergerMenu as any)}
                color={"secondary.sub"}
              />
            }
          />
        </Flex>
      </Flex>
      {isOpen && <HeaderMenu />}
    </Flex>
  );
}

function HeaderMenu() {
  const router = useRouter();

  return (
    <Flex
      gap={"1rem"}
      align={"center"}
      justify={"center"}
      px={"5%"}
      py={"1rem"}
      bg={"white"}
      direction={"column"}
      w={"100%"}
      boxShadow={"2xl"}
    >
      <Button maxW={"320px"} w={"100%"} variant={"sub"}>
        Post a Job
      </Button>
      <Button variant={"main"} maxW={"320px"} w={"100%"}>
        Vacancy
      </Button>
      <Link href="#contact">
        <Button variant={"main"} maxW={"320px"} w={"100%"}>
          Contact Us
        </Button>
      </Link>
    </Flex>
  );
}

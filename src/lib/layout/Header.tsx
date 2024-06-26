"use client";

import { Button, Flex, IconButton, Image, Text, Show } from "@chakra-ui/react";
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
        gap='2ewm'
      >
        <Link href={"/"}>
          <Flex cursor={"pointer"} align={"center"} gap={".7rem"}>
            <Image alt={"means logo"} src={"/log.jpeg"} w={"5.5rem"} />
            {/* <Text fontSize={"1.6rem"} fontWeight={"bold"} color={"primary.sub"}>
              MEANS
            </Text> */}
          </Flex>
        </Link>
        <Show above="md">
          <Flex gap={"3rem"} align={"center"} fontWeight='500'>
            <Link href="">Post a Job</Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://sequentialjobs.com/searchpage"
            >
              Vacancy
            </Link>
          </Flex>
        </Show>

        <Flex gap={"1rem"} align={"center"} fontWeight='500'>
          <Show above="md">
            <Link href="#contact">Contact Us</Link>
          </Show>

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
      <Link href="">Post a Job</Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://sequentialjobs.com/searchpage"
      >
        Vacancy
      </Link>

      <Link href="#contact">Contact Us</Link>
    </Flex>
  );
}

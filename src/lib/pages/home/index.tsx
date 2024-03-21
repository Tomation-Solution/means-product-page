"use client";

import { Flex, Box } from "@chakra-ui/react";
import { Hero } from "../../../lib/components/Hero";
import { About } from "../../../lib/components/About";
import {Expertise} from "../../../lib/components/Expertise";
import { Features } from "../../../lib/components/Features";
// import { Demo } from "../../../lib/components/Demo";
// import { Faq } from "../../../lib/components/Faq";
import { Contact } from "../../../lib/components/Contact";

function Home() {
  return (
    <Box my={{ base: "7%", lg: "3%" }}>
      <Hero />
      <About />
      <Expertise />
      <Features />
      {/* <Demo /> */}
      {/* <Faq /> */}
      <Contact />
    </Box>
  );
}

export default Home;

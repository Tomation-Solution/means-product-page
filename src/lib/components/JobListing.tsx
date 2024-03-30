import { Flex, Text, Grid, GridItem, Box, Image } from "@chakra-ui/react";

interface JobsCardProps {
  name: string;
  desc?: string | undefined;
  img: string;
}

export function JobListing() {
  const jobs: JobsCardProps[] = [
    {
      name: "DOE'S SOLUTIONS",
      img: "/custom.jpeg",
      desc: "We tailor our services to meet your unique needs, ensuring practical, actionable results.",
    },
    {
      name: "BAY'S ENTERPRISE",
      img: "/result.jpeg",
      desc: "We focus on tangible outcomes—taking the burden of BPM and Performance Management staffing and training needs totally off your desk towards boosting your bottom line. ",
    },
    {
      name: "AMAZON",
      img: "/virtual.jpeg",
      desc: "Let's work together to tailor solutions that align with your unique goals.",
    },
    {
      name: "APPLE PRO",
      img: "/map.jpeg",
      desc: "Our team brings diverse experiences and a global mindset to every project.",
    },
  ];
  return (
    <>
      <Box py={{ base: "10%", lg: "5%" }}>
        <Text
          fontSize={{ base: "1.5rem", lg: "2rem", xl: "2.6rem" }}
          fontWeight={"bold"}
          color={"gray.700"}
          textAlign="center"
        >
          JOB LISTING
        </Text>
        <Flex
          px={{ base: "5%", lg: "8%" }}
          py={{ base: "10%", lg: "5%" }}
          gap={"50px"}
          flexWrap="wrap"
          justifyContent={{ base: "center", lg: "space-between" }}
        >
          {jobs.map((feature, idx) => (
            <Flex
              key={idx}
              justifyContent={{ base: "center", lg: "space-between" }}
              flexWrap="wrap"
            >
              <JobCard {...feature} key={feature.name} />
            </Flex>
          ))}
        </Flex>
      </Box>
      );
    </>
  );
}

function JobCard(props: JobsCardProps) {
  return (
    <Flex
      direction={{ base: "column", lg: "column" }}
      align={{ base: "flex-start", lg: "center" }}
      gap={"1rem"}
      w="300px"
      boxShadow="lg"
      borderRadius="10px"
    >
      <Image
        alt=""
        src={props.img}
        w={{ base: "100%", lg: "100%" }}
        h={{ lg: "200px" }}
        borderRadius="10px 10px 0px 0px"
        zIndex={4}
      />
      <Flex direction={"column"} align={"flex-start"} gap="10px" p="15px">
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

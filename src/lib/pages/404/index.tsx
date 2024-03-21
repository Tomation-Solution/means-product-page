import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';

import MotionBox from '../../../lib/components/motion/Box';

const Page404 = () => {
  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center" my={"6%"} >
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        width={{ base: '100%', sm: '70%', md: '60%' }}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs" color="gray">
        <ChakraLink
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Text textAlign="center" fontWeight={"medium"} fontSize={{base: "1.5rem", lg: "2rem", xl: "3rem"}} color={"gray.500"} >
          This page used to be here, but not anymore
        </Text>

        <Box textAlign="center" marginTop={4}>
          <Link href="/" >
            <Button>
                Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;

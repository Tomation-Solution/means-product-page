import {Flex, Spinner, Text} from "@chakra-ui/react";


export function Loader() {

    return (
        <Flex w={"full"} minH={"90vh"} align={"center"} justify={"center"} direction={"column"} gap={6} >
            <Spinner color={"primary"} emptyColor={"whiteAlpha.50"} size={{base: "lg", lg: "xl"}} />
            <Text color={"gray.500"} >Loading...</Text>
        </Flex>
    )
}
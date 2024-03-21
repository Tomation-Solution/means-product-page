import {Text} from "@chakra-ui/react";
import Link from "next/link";

interface HeadingProps {
    text: string;
}

export function Heading(props: HeadingProps) {

    return (
        <Text fontSize={{base: "2rem", lg: "2.7rem", xl: "3.5rem"}} fontWeight={"bold"} color={"primary.sub"} lineHeight={{base: "2.3rem", lg: "3rem", xl: "3.7rem"}}>
            {props.text}
        </Text>
    )
}

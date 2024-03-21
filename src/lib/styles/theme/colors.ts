import type {DeepPartial, Theme} from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, any>> = {
    secondary: {
        main: "#00A03B",
        sub: "#16A34A",
        sub_: "#4ADE80",
        sub__: "#BBF7D0"
    },
    primary: {
        main: "#002541",
        sub: "#015595",
        sub_: "#0084E8",
        sub__: "#01AAFF",
        sub___: "#01559533"
    }
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
    ...overridenChakraColors,
    ...extendedColors,
};

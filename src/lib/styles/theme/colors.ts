import type {DeepPartial, Theme} from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, any>> = {
  secondary: {
    main: "#208ED4",
    sub: "#055786",
    sub_: "#208ED4",
    sub__: "#208ED4",
  },
  primary: {
    main: "#208ED4",
    sub: "#055786",
    sub_: "#208ED4",
    sub__: "#055786",
    sub___: "#01559533",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
    ...overridenChakraColors,
    ...extendedColors,
};

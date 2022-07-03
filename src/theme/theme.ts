import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "teal.200",
        color: "gray.800",
      },
    },
  },
});
export default theme;

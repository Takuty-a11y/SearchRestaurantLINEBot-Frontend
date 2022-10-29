import { FC, memo, ReactNode } from "react";
import { Box, Flex, useRadio, UseRadioProps } from "@chakra-ui/react";

interface Props extends UseRadioProps {
  children: ReactNode;
}

export const BudgetRadio: FC<Props> = memo((props) => {
  const { children } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        //boxShadow="md"
        bg='teal.50'
        border='1px solid'
        borderColor='teal.500'
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "green.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        p={3}
        fontSize="sm"
        justify="center"
        align="center"
      >
        {children}
      </Flex>
    </Box>
  );
});

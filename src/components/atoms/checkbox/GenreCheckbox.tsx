import { FC, ReactNode } from "react"
import { Box, chakra, Flex, Text, useCheckbox, UseCheckboxProps } from "@chakra-ui/react"

interface Props extends UseCheckboxProps {
  children: ReactNode
}

export const GenreCheckbox: FC<Props> = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

  return (
    <chakra.label
      display='flex'
      flexDirection='row'
      alignItems='center'
      gridColumnGap={2}
      bg='teal.50'
      border='1px solid'
      borderColor='teal.500'
      rounded='lg'
      p={3}
      cursor='pointer'
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems='center'
        justifyContent='center'
        border='2px solid'
        borderColor='green.500'
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg='green.500' />}
      </Flex>
      <Text color="gray.700" fontSize="xs" {...getLabelProps()}>{props.children}</Text>
    </chakra.label>
  )
}
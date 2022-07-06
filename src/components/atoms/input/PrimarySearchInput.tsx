import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type Props = {
  placeholder: string;
};

export const PrimarySearchInput = (props: Props) => {
  const { placeholder } = props;
  return (
    <InputGroup bg="teal.400" borderRadius={4} mr={4}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder={placeholder}
        _placeholder={{ color: "gray.300" }}
        border="none"
        color="white"
      />
    </InputGroup>
  );
};

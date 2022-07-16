import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {
  placeholder: string;
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
};

export const PrimarySearchInput: FC<Props> = (props) => {
  const { placeholder, textValue, setTextValue } = props;
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
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
        onChange={onChangeText}
        value={textValue}
      />
    </InputGroup>
  );
};

import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
  placeholder: string;
};

export const PrimarySearchInput: FC<Props> = (props) => {
  const { placeholder } = props;
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const onSubmitTextSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query =
      `keyword=${textValue}&` +
      `genre=${params.get("genre") ?? ""}&` +
      `large_area=${params.get("large_area") ?? ""}&` +
      `middle_area=${params.get("middle_area") ?? ""}&` +
      `budget=${params.get("budget") ?? ""}&` +
      `sort=${params.get("sort") ?? ""}`;
    const uri = encodeURI(`/?${query}`)
    navigate(uri);
  };

  useEffect(() => {
    setTextValue(params.get("keyword") ?? "")
  },[params])

  return (
    <Box w="100%">
      <form onSubmit={onSubmitTextSearch}>
        <InputGroup
          bgColor="gray.100"
          borderRadius="full"
          maxW="480px"
          size="lg"
          m="auto"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input
            type="text"
            placeholder={placeholder}
            _placeholder={{ color: "gray.500" }}
            onChange={onChangeText}
            borderRadius="full"
            value={textValue}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

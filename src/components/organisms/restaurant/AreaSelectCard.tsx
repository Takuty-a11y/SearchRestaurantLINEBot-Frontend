import {
  ChangeEvent,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useEffect,
} from "react";
import { Select, Stack } from "@chakra-ui/react";
import { useAllArea } from "../../../hooks/useAllArea";

type Props = {
  largeSelect: string;
  middleSelect: string;
  setLargeSelect: Dispatch<SetStateAction<string>>;
  setMiddleSelect: Dispatch<SetStateAction<string>>;
};

export const AreaSelectCard: FC<Props> = memo((props) => {
  const { largeSelect, middleSelect, setLargeSelect, setMiddleSelect } = props;
  const { getLargeArea, getMiddleArea, largeAreas, middleAreas } = useAllArea();

  const onChangeLarge = (e: ChangeEvent<HTMLSelectElement>) => {
    setLargeSelect(e.target.value ?? "");
    getMiddleArea(e.target.value);
  };
  const onChangeMiddle = (e: ChangeEvent<HTMLSelectElement>) => {
    setMiddleSelect(e.target.value ?? "");
  };

  useEffect(() => {
    getLargeArea();
  }, [getLargeArea]);

  return (
    <Stack>
      <Select
        variant="outline"
        bg="teal.50"
        border="1px solid"
        borderColor="teal.500"
        placeholder="都道府県"
        fontSize="md"
        value={largeSelect}
        onChange={onChangeLarge}
      >
        {largeAreas.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Select>
      <Select
        variant="outline"
        bg="teal.50"
        border="1px solid"
        borderColor="teal.500"
        fontSize="md"
        placeholder="エリア"
        value={middleSelect}
        onChange={onChangeMiddle}
      >
        {middleAreas.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Select>
    </Stack>
  );
});

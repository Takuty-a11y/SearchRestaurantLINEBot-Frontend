import { useRadioGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { Sort } from "../../../types/api/queryparam";
import { BudgetRadio } from "../../atoms/radio/BudgetRadio";

type Props = {
  sortValue: string
  setSortValue: Dispatch<SetStateAction<string>>;
};

export const SortRadioCard: FC<Props> = (props) => {
  const { sortValue, setSortValue } = props;
  const options: Sort[] = [
    { code: "4", name: "おすすめ" },
    { code: "1", name: "店名" },
    { code: "2", name: "ジャンル" },
    { code: "3", name: "エリア" },
  ];
  const onChangeRadio = (value: string) => {
    setSortValue(value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "sort",
    defaultValue: sortValue ?? "4",
    onChange: onChangeRadio,
  });

  const group = getRootProps();

  return (
    <Wrap p={3} {...group}>
      {options.map((item) => {
        const radio = getRadioProps({ value: item.code });
        return (
          <WrapItem key={item.code}>
            <BudgetRadio key={item.code} {...radio}>
              {item.name}
            </BudgetRadio>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

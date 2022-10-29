import { useRadioGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { budgetOptions } from "../../../Constants";
import { BudgetRadio } from "../../atoms/radio/BudgetRadio";

type Props = {
  budgetValue: string;
  setBudgetValue: Dispatch<SetStateAction<string>>;
};

export const BudgetRadioCard: FC<Props> = (props) => {
  const { budgetValue, setBudgetValue } = props;

  const onChangeRadio = (value: string) => {
    setBudgetValue(value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "budget",
    defaultValue: budgetValue,
    onChange: onChangeRadio,
  });

  const group = getRootProps();

  return (
    <Wrap p={3} {...group}>
      {budgetOptions.map((item) => {
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

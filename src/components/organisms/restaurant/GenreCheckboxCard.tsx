import { useCheckboxGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { Dispatch, FC, memo, SetStateAction } from "react";
import { genreOptions } from "../../../Constants";
import { GenreCheckbox } from "../../atoms/checkbox/GenreCheckbox";

type Props = {
  genreValue: string;
  setGenreValue: Dispatch<SetStateAction<string>>;
};

export const GenreCheckboxCard: FC<Props> = memo((props) => {
  const { genreValue, setGenreValue } = props;

  const onChangeRadio = (value: string[]) => {
    const lst = genreOptions
      .filter((itm) => value.includes(itm.code))
      .map((item) => item.code);
    setGenreValue(lst.join(","));
  };
  const { getCheckboxProps } = useCheckboxGroup({
    onChange: onChangeRadio,
    defaultValue: genreValue.length > 0 ? genreValue.split(",") : [],
  });

  return (
    <Wrap>
      {genreOptions.map((item) => {
        const radio = getCheckboxProps({ value: item.code });
        return (
          <WrapItem key={item.code}>
            <GenreCheckbox key={item.code} {...radio}>
              {item.name}
            </GenreCheckbox>
          </WrapItem>
        );
      })}
    </Wrap>
  );
});

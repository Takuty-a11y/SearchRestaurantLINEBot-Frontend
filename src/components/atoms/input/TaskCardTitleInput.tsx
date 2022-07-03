import {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useCallback,
  useState,
} from "react";
import { Box, Heading, Input } from "@chakra-ui/react";

type Props = {};

export const TaskCardTitleInput: FC<Props> = (props) => {
  const [isClick, setisClick] = useState(false);
  const [cardTitle, setCardTitle] = useState("Today");

  const onClickTitle = useCallback(() => {
    setisClick(true);
  }, []);
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };
  const onFocusTitle = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };
  const onBlurTitle = () => {
    setisClick(false);
  };
  const onSubmitTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisClick(false);
  };

  return (
    <Box onClick={onClickTitle} ml={3} mb={3} cursor="pointer">
      {isClick ? (
        <form onSubmit={onSubmitTitle}>
          <Input
            placeholder="タイトルを入力"
            size="sm"
            fontSize="1.1rem"
            bg="white"
            p={1}
            autoFocus
            onChange={onChangeTitle}
            onFocus={onFocusTitle}
            onBlur={onBlurTitle}
            value={cardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <Heading as="h3" fontSize="1.4rem">
          {cardTitle === "" ? "タイトルなし" : cardTitle}
        </Heading>
      )}
    </Box>
  );
};

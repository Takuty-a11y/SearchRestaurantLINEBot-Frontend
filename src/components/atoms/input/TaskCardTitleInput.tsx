import {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useCallback,
  useState,
} from "react";
import { Box, Heading, Input } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const TaskCardTitleInput: FC<Props> = (props) => {
  const { title } = props;
  const [isClick, setisClick] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);

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
          />
        </form>
      ) : (
        <Heading as="h3" fontSize="1.4rem" maxW="100%">
          {cardTitle === "" ? "タイトルなし" : cardTitle}
        </Heading>
      )}
    </Box>
  );
};

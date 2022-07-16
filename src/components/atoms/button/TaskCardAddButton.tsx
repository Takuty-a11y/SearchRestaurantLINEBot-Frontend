import { FC, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import { Box, Button, Icon } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { useTaskList } from "../../../hooks/useTaskList";

export const TaskCardAddButton: FC = () => {
  const { globalTaskCardList, setGlobalTaskCardList } = useTaskList();
  const onClickAddCard = useCallback(() => {
    const CardId = uuidv4();
    setGlobalTaskCardList([
      ...globalTaskCardList,
      {
        id: CardId,
        title: "Today",
        completed: false,
        draggableId: `card-${CardId}`,
      },
    ]);
  }, [globalTaskCardList, setGlobalTaskCardList]);
  return (
    <Box mx={3} my={3}>
      <Button
        pr={8}
        bg="teal.300"
        color="white"
        _hover={{ opacity: 0.7 }}
        onClick={onClickAddCard}
      >
        <Icon as={MdAdd} w={5} h={5} />
        タスクリストを追加
      </Button>
    </Box>
  );
};

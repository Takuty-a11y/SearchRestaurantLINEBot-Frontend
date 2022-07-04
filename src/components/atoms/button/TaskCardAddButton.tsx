import { FC } from "react";
import { MdAdd } from "react-icons/md";
import { Box, Button, Icon } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { useTaskList } from "../../../hooks/useTaskList";

export const TaskCardAddButton: FC = () => {
  const { taskCardList, setTaskCardList } = useTaskList();
  const onClickAddCard = () => {
    const CardId = uuidv4();
    setTaskCardList([
      ...taskCardList,
      {
        id: CardId,
        title: "Today",
        completed: false,
        draggableId: `card-${CardId}`,
      },
    ]);
  };
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

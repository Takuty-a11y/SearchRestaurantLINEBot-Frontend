import React, { Dispatch, FC, SetStateAction } from "react";
import { Box, Button, Icon } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { TaskList } from "../../../types/taskList";
import { MdAdd } from "react-icons/md";

type Props = {
  taskCardList: Array<TaskList>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskList>>>;
};

export const TaskCardAddButton: FC<Props> = (props) => {
  const { taskCardList, setTaskCardList } = props;
  const onClickAddCard = () => {
    const CardId = uuidv4();
    setTaskCardList([
      ...taskCardList,
      { id: CardId, draggableId: `item-${CardId}` },
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

import { IconButton } from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import { TaskList } from "../../../types/taskList";

type Props = {
  taskCardList: Array<TaskList>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskList>>>;
  taskCard: TaskList;
};

export const TaskCardDeleteButton: FC<Props> = (props) => {
  const { taskCardList, setTaskCardList, taskCard } = props;
  const onClickCardDelete = (id: string) => {
    setTaskCardList(taskCardList.filter((trg) => trg.id !== id))
  }

  return (
    <IconButton
      aria-label="タスクカード削除ボタン"
      icon={<MdClose />}
      size="lg"
      w={0}
      h={5}
      onClick={() => onClickCardDelete(taskCard.id)}
    />
  );
};

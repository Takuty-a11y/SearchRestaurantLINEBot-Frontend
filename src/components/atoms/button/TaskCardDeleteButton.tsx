import { FC, useCallback } from "react";
import { IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import { useTaskList } from "../../../hooks/useTaskList";
import { TaskList } from "../../../types/taskList";

type Props = {
  taskCard: TaskList;
};

export const TaskCardDeleteButton: FC<Props> = (props) => {
  const { taskCard } = props;
  const { globalTaskCardList, setGlobalTaskCardList } = useTaskList();
  const onClickCardDelete = useCallback(
    (id: string) => {
      setGlobalTaskCardList(globalTaskCardList.filter((trg) => trg.id !== id));
    },
    [globalTaskCardList, setGlobalTaskCardList]
  );

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

import { Dispatch, FC, SetStateAction, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Task } from "../../../types/task";
import { TaskCardDeleteButton } from "../../atoms/button/TaskCardDeleteButton";
import { TaskAddInput } from "../../atoms/input/TaskAddInput";
import { TaskCardTitleInput } from "../../atoms/input/TaskCardTitleInput";
import { Tasks } from "../../molecules/task/Tasks";
import { TaskList } from "../../../types/taskList";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  taskCardList: Array<TaskList>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskList>>>;
  taskCard: TaskList;
};

export const TaskCard: FC<Props> = (props) => {
  const { index, taskCardList, setTaskCardList, taskCard } = props;
  const [taskList, setTaskList] = useState<Array<Task>>([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <Box
          w="280px"
          px={2}
          py={4}
          m="10px 1%"
          bg="gray.100"
          borderRadius="10px"
          shadow="md"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Flex justifyContent="space-between" {...provided.dragHandleProps}>
            <TaskCardTitleInput />
            <TaskCardDeleteButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
              taskCard={taskCard}
            />
          </Flex>
          <TaskAddInput taskList={taskList} setTaskList={setTaskList} />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </Box>
      )}
    </Draggable>
  );
};

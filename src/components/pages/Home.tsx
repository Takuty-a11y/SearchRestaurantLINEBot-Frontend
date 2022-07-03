import { FC, memo, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { TaskCardAddButton } from "../atoms/button/TaskCardAddButton";
import { TaskCard } from "../organisms/task/TaskCard";
import { TaskList } from "../../types/taskList";

export const Home: FC = memo(() => {
  const [taskCardList, setTaskCardList] = useState<Array<TaskList>>([
    {
      id: "0",
      draggableId: "item-0",
    },
  ]);
  const onDragEndCard = (res: DropResult) => {
    if (res.destination?.index === undefined) {
      return;
    }
    const startIndex = res.source.index;
    const endIndex = res.destination?.index;
    const newList = [...taskCardList];
    const item = newList.splice(startIndex, 1);
    newList.splice(endIndex, 0, item[0]);
    setTaskCardList(newList);
  };
  return (
    <DragDropContext onDragEnd={onDragEndCard}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <Flex
            justifyContent="flex-start"
            align="flex-start"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <TaskCardAddButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </Flex>
        )}
      </Droppable>
    </DragDropContext>
  );
});

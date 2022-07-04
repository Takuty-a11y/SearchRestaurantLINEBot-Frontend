import { FC, memo, useCallback, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { TaskCardAddButton } from "../atoms/button/TaskCardAddButton";
import { TaskCard } from "../organisms/task/TaskCard";
import { useTaskList } from "../../hooks/useTaskList";
import { useUserTask } from "../../hooks/useUserTask";
import { useLoginUser } from "../../hooks/useLoginUser";

export const Home: FC = memo(() => {
  const { taskCardList, setTaskCardList } = useTaskList();
  const { getUserTask, loading } = useUserTask();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    if (loginUser === null) return;
    getUserTask(loginUser?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDragEndCard = useCallback(
    (res: DropResult) => {
      if (res.destination?.index === undefined) {
        return;
      }
      const startIndex = res.source.index;
      const endIndex = res.destination?.index;
      const newList = [...taskCardList];
      const item = newList.splice(startIndex, 1);
      newList.splice(endIndex, 0, item[0]);
      setTaskCardList(newList);
    },
    [taskCardList, setTaskCardList]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <DragDropContext onDragEnd={onDragEndCard}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <Wrap
                p={{ base: 4, md: 10 }}
                justify="flex-start"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {taskCardList.map((taskCard, index) => (
                  <WrapItem key={taskCard.id}>
                    <TaskCard index={index} taskCard={taskCard} />
                  </WrapItem>
                ))}
                {provided.placeholder}
                <WrapItem>
                  <TaskCardAddButton />
                </WrapItem>
              </Wrap>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
});

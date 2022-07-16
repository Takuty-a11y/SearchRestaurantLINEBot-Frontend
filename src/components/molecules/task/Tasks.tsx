import { Dispatch, FC, SetStateAction } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { Task } from "../../../types/task";
import { TaskItem } from "./TaskItem";

type Props = {
  taskList: Array<Task>;
  setTaskList: Dispatch<SetStateAction<Array<Task>>>;
};

export const Tasks: FC<Props> = (props) => {
  const { taskList, setTaskList } = props;

  const onDragEndTask = (res: DropResult) => {
    if (res.destination?.index === undefined){
      return;
    }
    const startIndex = res.source.index;
    const endIndex = res.destination?.index;
    const newList = [...taskList];
    const item = newList.splice(startIndex, 1);
    newList.splice(endIndex, 0, item[0]);
    setTaskList(newList);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEndTask}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((trgTask, index) => (
                <div key={trgTask.id}>
                  <TaskItem
                    index={index}
                    trgTask={trgTask}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

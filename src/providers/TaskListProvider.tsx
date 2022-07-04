import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Task } from "../types/task";
import { TaskList } from "../types/taskList";

export type TaskListContextType = {
  taskCardList: Array<TaskList>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskList>>>;
};
export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType
);
export type TaskContextType = {
  taskList: Array<Task>;
  setTaskList: Dispatch<SetStateAction<Array<Task>>>;
};
export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

type Props = {
  children: ReactNode;
};
export const TaskListProvider = (props: Props) => {
  const { children } = props;
  const [taskCardList, setTaskCardList] = useState<Array<TaskList>>([]);
  const [taskList, setTaskList] = useState<Array<Task>>([]);

  return (
    <TaskListContext.Provider value={{ taskCardList, setTaskCardList }}>
      <TaskContext.Provider value={{ taskList, setTaskList }}>
        {children}
      </TaskContext.Provider>
    </TaskListContext.Provider>
  );
};

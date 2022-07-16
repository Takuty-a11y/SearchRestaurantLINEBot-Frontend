import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { Task } from "../types/task";
import { TaskList } from "../types/taskList";

export type TaskListContextType = {
  globalTaskCardList: Array<TaskList>;
  setGlobalTaskCardList: Dispatch<SetStateAction<Array<TaskList>>>;
};
export const TaskListContext = createContext<TaskListContextType>(
  {} as TaskListContextType
);
export type TaskContextType = {
  globalTaskList: Array<Task>;
  setGlobalTaskList: Dispatch<SetStateAction<Array<Task>>>;
};
export const TaskContext = createContext<TaskContextType>(
  {} as TaskContextType
);

type Props = {
  children: ReactNode;
};

export const TaskListProvider = (props: Props) => {
  const { children } = props;
  const [globalTaskCardList, setGlobalTaskCardList] = useState<Array<TaskList>>(
    []
  );
  const [globalTaskList, setGlobalTaskList] = useState<Array<Task>>([]);

  return (
    <TaskListContext.Provider
      value={{ globalTaskCardList, setGlobalTaskCardList }}
    >
      <TaskContext.Provider value={{ globalTaskList, setGlobalTaskList }}>
        {children}
      </TaskContext.Provider>
    </TaskListContext.Provider>
  );
};

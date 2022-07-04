import { useContext } from "react";
import {
  TaskListContext,
  TaskListContextType,
} from "../providers/TaskListProvider";

export const useTaskList = (): TaskListContextType =>
  useContext(TaskListContext);

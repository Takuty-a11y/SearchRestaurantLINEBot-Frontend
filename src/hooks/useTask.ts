import { useContext } from "react";

import { TaskContext, TaskContextType } from "../providers/TaskListProvider";

export const useTask = (): TaskContextType => useContext(TaskContext);

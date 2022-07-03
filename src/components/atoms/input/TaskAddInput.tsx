import { Input } from "@chakra-ui/react";
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../../types/task";

type Props = {
  taskList: Array<Task>;
  setTaskList: Dispatch<SetStateAction<Array<Task>>>;
};

export const TaskAddInput: FC<Props> = (props) => {
  const [inputText, setInputText] = useState("");
  const { taskList, setTaskList } = props;

  const onSubmitTaskAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // タスク追加[NullOrWhiteSpaceは追加しない]
    if (inputText && inputText.match(/\S/g)) {
      const taskId = uuidv4();
      setTaskList([
        ...taskList,
        { id: taskId, text: inputText, draggableId: `task-${taskId}` },
      ]);
    }
    setInputText("");
  };
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitTaskAdd}>
        <Input
          size="md"
          fontSize="1.1rem"
          bg="white"
          placeholder="タスクを追加"
          onChange={onChangeText}
          value={inputText}
        />
      </form>
    </div>
  );
};

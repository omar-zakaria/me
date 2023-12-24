import { useReducer } from "react";
import Task from "./Task";
import tasksReducer from "./tasksReducer";

export default function TaskApp(initialTasks: Task[]) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  let nextId = initialTasks.length;

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
}

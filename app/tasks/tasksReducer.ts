import { TaskAction } from "./TaskActions";

export default function tasksReducer(tasks, action) {
    switch (action.type) {
      case TaskAction.Added: {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case TaskAction.Updated: {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case TaskAction.Deleted: {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  
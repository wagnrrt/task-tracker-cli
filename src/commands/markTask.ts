import { loadTasks, saveTasks } from "../utils/fileHandler.js";
import { Stats } from "../utils/types.js";

function markInProgressTask(id: string) {
  const tasks = loadTasks();

  let found = false;

  const updateTask = tasks.map((task) => {
    if (task.id === id) {
      found = true;
      return {
        ...task,
        stats: Stats.inProgress,
        updatedAt: new Date().toDateString(),
      };
    }
    return task;
  });

  if (!found) {
    console.log("Task not found");
    return;
  }

  saveTasks(updateTask);
  console.log("Task updated successfully");
}

function markDoneTask(id: string) {
  const tasks = loadTasks();

  let found = false;

  const updateTask = tasks.map((task) => {
    if (task.id === id) {
      found = true;
      return {
        ...task,
        stats: Stats.done,
        updatedAt: new Date().toDateString(),
      };
    }
    return task;
  });

  if (!found) {
    console.log("Task not found");
    return;
  }

  saveTasks(updateTask);
  console.log("Task updated successfully");
}

export { markDoneTask, markInProgressTask };

import { loadTasks, saveTasks } from "../utils/fileHandler.js";

export default function updateTask(id: string, description: string) {
  const tasks = loadTasks();

  let found = false;

  const updateTask = tasks.map((task) => {
    if (task.id === id) {
      found = true;
      return {
        ...task,
        description,
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

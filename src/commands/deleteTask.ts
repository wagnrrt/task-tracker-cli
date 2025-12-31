import { loadTasks, saveTasks } from "../utils/fileHandler.js";

export default function deleteTask(ids: string[]): void {
  const tasks = loadTasks();

  const idSet = new Set(ids);

  const remainingTasks = tasks.filter((task) => !idSet.has(task.id));

  const deletedCount = tasks.length - remainingTasks.length;

  if (deletedCount === 0) {
    console.log("Task not a found");
    return;
  }

  saveTasks(remainingTasks);

  console.log(`${deletedCount} task(s) deleted successfully`);
}

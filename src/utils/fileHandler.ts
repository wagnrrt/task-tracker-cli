import { readFileSync, writeFileSync } from "node:fs";
import { Stats, Task } from "./types.js";
import { FILE_PATH } from "../constants.js";

function loadTasks(): Task[] {
  return JSON.parse(readFileSync(FILE_PATH, "utf-8"));
}

function saveTasks(tasks: Task[]): void {
  writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

function filterTasks(tasks: Task[], stats: Stats): Task[] {
  return tasks.filter((tasks) => tasks.stats === stats);
}

export { loadTasks, saveTasks, filterTasks };

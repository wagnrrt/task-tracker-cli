import { nanoid } from "nanoid";
import { Stats, Task } from "../utils/types.js";
import { FILE_PATH } from "../constants.js";
import { readFileSync } from "node:fs";
import { saveTasks } from "../utils/fileHandler.js";

export default function addTask(description: string) {
  const fileData = readFileSync(FILE_PATH, "utf-8");
  const jsonData = JSON.parse(fileData);

  const newTask: Task = {
    id: nanoid(3),
    description,
    stats: Stats.todo,
    createdAt: new Date().toDateString(),
    updatedAt: null,
  };

  jsonData.push(newTask);
  saveTasks(jsonData);
}

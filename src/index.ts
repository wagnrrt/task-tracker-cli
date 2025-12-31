#!/usr/bin/env node

import { nanoid } from "nanoid";
import { writeFileSync, readFileSync } from "fs";

const filePath = "./src/task.json";
const fileData = readFileSync(filePath, "utf-8");
const jsonData = JSON.parse(fileData);

enum Stats {
  todo = "Todo",
  inProgress = "In-Progress",
  done = "Done",
}

interface Task {
  id: string;
  description: string;
  stats: Stats;
  createdAt: string;
  updatedAt: string;
}

function addTask(description: string) {
  const newTask: Task = {
    id: nanoid(3),
    description,
    stats: Stats.todo,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  };

  jsonData.push(newTask);
  writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
}

const action = process.argv[2] ?? "";
const description = process.argv[3] ?? "";

switch (action) {
  case "add":
    addTask(description);
    break;
}

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
  updatedAt: string | null;
}

function addTask(description: string) {
  const newTask: Task = {
    id: nanoid(3),
    description,
    stats: Stats.todo,
    createdAt: new Date().toDateString(),
    updatedAt: null,
  };

  jsonData.push(newTask);
  writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
}

function updateTask(id: string, description: string) {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));

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

  writeFileSync(filePath, JSON.stringify(updateTask, null, 2));
  console.log("Task updated successfully");
}

function deleteTask(id: string) {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));

  const filteredTasks = tasks.filter((tasks) => tasks.id !== id);

  if (filteredTasks.length === tasks.length) {
    console.log("Task not a found");
    return;
  }

  writeFileSync(filePath, JSON.stringify(filteredTasks, null, 2));

  console.log("Task deleted successfully");
}

function listTask() {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));

  if (tasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  tasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

function listDoneTask() {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));
  const filteredTasks = tasks.filter((tasks) => tasks.stats === Stats.done);

  if (filteredTasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  filteredTasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

function listTodoTask() {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));
  const filteredTasks = tasks.filter((tasks) => tasks.stats === Stats.todo);

  if (filteredTasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  filteredTasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

function listInProgressTask() {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));
  const filteredTasks = tasks.filter(
    (tasks) => tasks.stats === Stats.inProgress,
  );

  if (filteredTasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  filteredTasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

function markInProgressTask(id: string) {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));

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

  writeFileSync(filePath, JSON.stringify(updateTask, null, 2));
  console.log("Task updated successfully");
}

function markDoneTask(id: string) {
  const tasks: Task[] = JSON.parse(readFileSync(filePath, "utf-8"));

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

  writeFileSync(filePath, JSON.stringify(updateTask, null, 2));
  console.log("Task updated successfully");
}

const command = process.argv[2] ?? "";
const argument = process.argv[3] ?? "";
const argument2 = process.argv[4] ?? "";

switch (command) {
  case "add":
    addTask(argument);
    break;
  case "update":
    updateTask(argument, argument2);
    break;
  case "delete":
    deleteTask(argument);
    break;
  case "list":
    switch (argument) {
      case "done":
        listDoneTask();
        break;
      case "todo":
        listTodoTask();
        break;
      case "in-progress":
        listInProgressTask();
        break;
      default:
        listTask();
    }
    break;
  case "mark-in-progress":
    markInProgressTask(argument);
    break;
  case "mark-done":
    markDoneTask(argument);
    break;
}

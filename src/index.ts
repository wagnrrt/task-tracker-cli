#!/usr/bin/env node

import addTask from "./commands/addTask.js";
import deleteTask from "./commands/deleteTask.js";
import {
  listDoneTask,
  listInProgressTask,
  listTask,
  listTodoTask,
} from "./commands/listTask.js";
import { markDoneTask, markInProgressTask } from "./commands/markTask.js";
import updateTask from "./commands/updateTask.js";

const command = process.argv[2] ?? "";
const args = process.argv[3] ?? "";
const args2 = process.argv[4] ?? "";

switch (command) {
  case "add":
    addTask(args);
    break;
  case "update":
    updateTask(args, args2);
    break;
  case "delete":
    const deleteIds = process.argv.slice(3);
    deleteTask(deleteIds);
    break;
  case "list":
    switch (args) {
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
    markInProgressTask(args);
    break;
  case "mark-done":
    markDoneTask(args);
    break;
}

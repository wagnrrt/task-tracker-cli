import { filterTasks, loadTasks } from "../utils/fileHandler.js";
import { Stats } from "../utils/types.js";

function listTask() {
  const tasks = loadTasks();

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
  const tasks = loadTasks();
  const doneTasks = filterTasks(tasks, Stats.done);

  if (doneTasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  doneTasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

function listTodoTask() {
  const tasks = loadTasks();
  const todoTasks = filterTasks(tasks, Stats.todo);

  if (todoTasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  todoTasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

function listInProgressTask() {
  const tasks = loadTasks();
  const inProgressTasks = filterTasks(tasks, Stats.inProgress);

  if (inProgressTasks.length === 0) {
    console.log("No tasks found");
    return;
  }

  inProgressTasks.forEach((task) =>
    console.log(`
      [${task.stats.toUpperCase()}] ${task.description}
      ID: ${task.id}
      Created: ${task.createdAt}
      Updated: ${task.updatedAt ?? "-"}
    `),
  );
}

export { listTask, listDoneTask, listTodoTask, listInProgressTask };

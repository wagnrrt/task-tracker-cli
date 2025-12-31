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

export { Stats, Task };

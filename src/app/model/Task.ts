export enum TaskStatus {
  IN_PROGRESS = "in progress",
  TODO = "todo",
  DONE = "done",
}

export class Task {
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus,
    public createdAt: Date
  ) {
  }
}

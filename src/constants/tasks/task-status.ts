export enum E_Status {
  Todo = 'Todo',
  InProgress = 'In Progress',
  Completed = 'Completed'
}

export enum E_TaskStatus {
  Todo = 1,
  InProgress = 2,
  Completed = 3
}

export const C_TaskStatus = {
  [E_Status.Todo]: E_TaskStatus.Todo,
  [E_Status.InProgress]: E_TaskStatus.InProgress,
  [E_Status.Completed]: E_TaskStatus.Completed
}

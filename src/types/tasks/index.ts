type T_TaskStatus = 0 | 1

export type T_Task = {
  id?: number
  name: string
  status: T_TaskStatus
  createdDate: string
}

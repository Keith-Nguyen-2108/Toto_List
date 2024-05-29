import { E_ColumnActions } from '../common'
export const TASK_COLUMN_ACTIONS = [E_ColumnActions.Edit, E_ColumnActions.Delete]

export const TASKS_COLUMN = [
  {
    title: 'Module Name',
    dataIndex: 'name',
    ellipsis: true,
    width: 350,
    slots: { customRender: 'name' }
  },

  {
    title: 'Status',
    dataIndex: 'status',
    width: 150,
    slots: { customRender: 'status' }
  },

  {
    title: 'Created Date',
    dataIndex: 'createdDate',
    ellipsis: true,
    width: 200,
    slots: { customRender: 'createdDate' }
  },
  {
    title: 'Action',
    key: 'id',
    dataIndex: 'action',
    slots: { customRender: 'action' },
    fixed: 'right',
    width: 70,
    align: 'center'
  }
]

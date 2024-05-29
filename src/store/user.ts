import { createStore } from 'vuex'

import initialState from '@/constants/fake-data.json'
import type { T_Task } from '@/types'

export const userStore = createStore({
  state: {
    tasks: initialState.tasks as T_Task[],
    task: {} as T_Task
  },
  getters: {
    listTasks: (state) => state.tasks,
    taskDetail: (state) => state.task
  },
  mutations: {
    createNewTask(state, payload) {
      const temp = { ...payload, id: [...state.tasks].length + 1 }
      state.tasks.push(temp)
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id)
    },
    editTask(state, payload) {
      const items = state.tasks
      const itemIndex = items.findIndex((x) => x.id == payload.id)
      items[itemIndex] = { ...items[itemIndex], ...payload }
    },
    getTaskById(state, id) {
      if (!id) return
      const temp = state.tasks.find((task) => task.id === id)
      state.task = { ...temp }
    }
  }
})

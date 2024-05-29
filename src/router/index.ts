import { createRouter, createWebHistory } from 'vue-router'

import ListTasks from '@/views/Tasks/index.vue'
import AddEditTaskModal from '@/views/Tasks/AddEditTaskModal.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListTasks,
      children: [
        {
          path: 'create-new-task',
          name: 'AddTaskModal',
          component: AddEditTaskModal
        },
        {
          path: '/task/:id',
          name: 'EditTaskModal',
          component: AddEditTaskModal
        }
      ]
    }
  ]
})

export default router

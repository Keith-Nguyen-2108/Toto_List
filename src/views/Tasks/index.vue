<template>
  <div class="p-4 list-tasks-container d-flex justify-content-center align-items-center">
    <div>
      <div class="d-flex justify-content-end mb-3">
        <a-button type="primary" @click="$router.push('/create-new-task')">Add New Task</a-button>
      </div>
      <ListTasks />
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import ListTasks from './ListTasks.vue'
</script>

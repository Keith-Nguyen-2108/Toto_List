<template>
  <a-table
    :columns="TASKS_COLUMN"
    :data-source="listTasks"
    :scroll="{ x: 920 }"
    :pagination="false"
  >
    <template #status="{ record }">
      <a-switch :checked="!!record.status" @change="onChangeStatus(record, $event)" />
    </template>

    <template #action="{ record }">
      <a-dropdown :trigger="['click']">
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="(title, key) in TASK_COLUMN_ACTIONS"
              :key="key"
              :class="title !== E_ColumnActions.Delete ? 'default-text' : 'error-text'"
              @click="onActionClick(title, record.id)"
            >
              {{ title }}
            </a-menu-item>
          </a-menu>
        </template>
        <MoreOutlined />
      </a-dropdown>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MoreOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

import { userStore } from '@/store'
import {
  TASKS_COLUMN,
  TASK_COLUMN_ACTIONS,
  E_ColumnActions,
  C_CONFIRM_MESSAGES,
  C_SUCCESS_MESSAGES
} from '@/constants'
import { showConfirmModal, useNotificationSuccess } from '@/mixins'

const router = useRouter()

const listTasks = computed(() => userStore.getters.listTasks)

const onChangeStatus = (record: Record<string, any>, value: boolean) => {
  const payload = { ...record, status: value }
  userStore.commit('editTask', payload)
  useNotificationSuccess(C_SUCCESS_MESSAGES.Update)
}

const onActionClick = (actionType: E_ColumnActions, id: Number) => {
  if (actionType === E_ColumnActions.Delete) {
    showConfirmModal(C_CONFIRM_MESSAGES.Delete, C_SUCCESS_MESSAGES.Delete, () =>
      userStore.commit('deleteTask', id)
    )
  } else router.push('/task/' + id)
}
</script>

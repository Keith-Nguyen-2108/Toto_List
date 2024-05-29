<template>
  <a-modal
    v-model:open="visible"
    :title="`${taskId ? 'Edit' : 'Add'} Module`"
    :okText="taskId ? 'OK' : 'Create'"
    @ok="onOk"
    @cancel="onCancel"
  >
    <div class="py-2">
      <TextInput
        form-item
        required
        label="Module Name"
        :value="fields?.name.value.value || ''"
        :help="fields?.name.errorMessage.value"
        @change="onChange('name', $event)"
      />

      <div class="my-3 d-flex align-items-center">
        <label class="me-3">Status</label>
        <a-switch
          :checked="fields?.status.value.value || false"
          @change="onChange('status', $event)"
        />
      </div>

      <DatePicker
        form-item
        required
        label="Created Date"
        :value="
          fields?.createdDate.value.value
            ? dayjs(fields?.createdDate.value.value, C_FORMAT_DATE_STR.date)
            : ''
        "
        :help="fields?.createdDate.errorMessage.value"
        @change="onChange('createdDate', $event)"
      />
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'

import { TextInput, DatePicker } from '@/components'
import { C_FORMAT_DATE_STR, C_SUCCESS_MESSAGES } from '@/constants'
import { userStore } from '@/store'
import router from '@/router'
import { useNotificationSuccess } from '@/mixins'
import { T_Task } from '@/types'
import { useFormValidation } from '@/hooks'

const route = useRoute()

const visible = ref(true)

const taskId = computed(() => +route.params.id || null)

const { fields, values, setValues, handleSubmit } = useFormValidation({
  id: {},
  name: { label: 'Module Name', rules: 'required' },
  status: {},
  createdDate: { label: 'Module Name', rules: 'required' }
})

onMounted(() => {
  if (taskId.value) fetchTaskDetails()
  else setValues({ status: false })
})

const fetchTaskDetails = () => {
  userStore.commit('getTaskById', taskId.value)
  setValues(userStore.getters.taskDetail)
}

const onChange = (key: keyof T_Task, value: any) => {
  setValues({ [key]: value })
}

const onOk = handleSubmit(() => {
  if (taskId.value) userStore.commit('editTask', values)
  else userStore.commit('createNewTask', values)

  useNotificationSuccess(taskId.value ? C_SUCCESS_MESSAGES.Update : C_SUCCESS_MESSAGES.Created)

  onCancel()
})

const onCancel = () => {
  visible.value = false
  router.push('/')
}
</script>

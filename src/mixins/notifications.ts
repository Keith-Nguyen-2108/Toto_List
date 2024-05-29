import { notification, Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { C_CONFIRM_MESSAGES } from '@/constants'

const C_LIST_DELETE_MESSAGE = [C_CONFIRM_MESSAGES.Delete]

export const useNotificationSuccess = (message: string, duration?: number) => {
  notification.success({ message, ...(duration ? { duration } : {}) })
}

export const useNotificationError = (err: string) => {
  notification.error({ message: err })
}

export const showConfirmModal = (
  title: string,
  message?: string,
  callbackOk?: Function,
  callbackCancel?: Function
) => {
  Modal.confirm({
    title: title,
    icon: createVNode(ExclamationCircleOutlined),
    okText: 'OK',
    okType: C_LIST_DELETE_MESSAGE.includes(title) ? 'danger' : 'primary',
    cancelText: 'Cancel',
    onOk: async () => {
      try {
        callbackOk && (await callbackOk())
        if (message) useNotificationSuccess(message, 5)
      } catch (err) {
        useNotificationError('Some thing went wrong')
      }
    },
    onCancel: () => callbackCancel && callbackCancel()
  })
}

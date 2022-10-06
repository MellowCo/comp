import { Message, MessageBox, Notification } from 'element-ui'

/**
 * 错误提示
 * @param {string} message - 提示信息
 */
export function errorNotify(message, duration = 3000){
  Notification.error({
    title: '提示',
    duration,
    message,
  })
}

/**
 * 成功提示
 * @param {string} message - 提示信息
 */
export function successNotify(message){
  Notification.success({
    title: '成功',
    duration: 3000,
    message,
  })
}

/**
 * 弹出提示框
 * @param {string} msg - 提示信息
 */
export async function confirm(msg){
  const message = msg || '确定要执行该操作吗？'

  await MessageBox.confirm(
    message,
    '提示',
    {
      type: 'warning',
    })
}

/**
 * 错误提示
 * @param {string} message - 提示信息
 */
export function errorMessage(message){
  Message.error(message)
}

/**
 * 错误提示
 * @param {string} message - 提示信息
 */
export function successMessage(message){
  Message.success(message)
}

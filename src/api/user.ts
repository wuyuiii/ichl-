import request from '@/utils/request'
import type { UserListType, UserLogListType } from '@/interface/modules/api'
import type { EditDataType } from '@/interface/modules/user'

/**
 * 获取用户列表
 *  role = 1 学生列表
 *  role = 2 教师列表
 *  role = 3 管理员列表
 * @param data
 * @returns
 */
export const getUserListAPI = (data: UserListType) => {
  return request.get('/user/userList', {
    params: data
  })
}

/**
 * 删除学生
 * @param id
 * @returns
 */
export const delStuAPI = (id: number) => {
  return request.delete('/user/delStudent', { params: { id } })
}

/**
 * 获取用户信息
 * @param id
 * @returns
 */
export const getUserInfoAPI = (id: number) => {
  return request.get('/user/studentInfo', { params: { id } })
}

/**
 * 添加用户
 * @param data
 * @returns
 */
export const addUserInfoAPI = (data: EditDataType) => {
  return request.post('/user/addUser', data)
}

/**
 * 修改用户
 * @param data
 * @returns
 */
export const updateUserInfoAPI = (data: EditDataType) => {
  return request.patch('/user/updateUser', data)
}

/**
 * 修改用户状态
 * @param id
 * @returns
 */
export const updateUserStateAPI = (id: number) => {
  return request.get('/user/stateManage', { params: { id } })
}

/**
 * 获取用户操作日志列表
 * @param id
 * @returns
 */
export const getLogListAPI = (data: UserLogListType) => {
  return request.get('/user/stuLogList', { params: data })
}

/**
 * 获取操作日志
 * @param {*} id
 * @returns
 */
export const getLogAPI = (data: any) => {
  return request.get('/user/stuLog', { params: data })
}

/**
 * 删除学生操作日志
 * @param id
 * @returns
 */
export const delStuLogAPI = (id: number) => {
  return request.delete('/user/delStuLog', { params: { id } })
}

export const updateMineInfoAPI = (data: any) => {
  return request.patch('/user/updateStudent', data)
}

/**
 * 上传图片
 * @param {*} file
 * @returns
 */
export const uploadAvatar = (file: any) => {
  return request.post('/user/uploadAvatar', file, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

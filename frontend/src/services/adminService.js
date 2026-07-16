import api from './api'

export const getAllUserList =async (params) =>{
  const response = await api.get('/admin/users',params)
  return response.data
}
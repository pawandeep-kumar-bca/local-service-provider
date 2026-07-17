import api from './api'

export const getAllUserList =async (params) =>{
  const response = await api.get('/admin/users',{params})
  return response.data
}

export const getAllProvidersList =async (params) =>{
  const response = await api.get('/admin/providers',{params})
  return response.data
}
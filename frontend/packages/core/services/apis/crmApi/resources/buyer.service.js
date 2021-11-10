import api from '../api'
import { buyers } from './routes'

export const postBuyer = async (params) => await api.post(buyers.post, params)

export const putBuyer = async (id, params) => await api.put(`${ buyers.post }/${ id }`, params)

export const deleteBuyer = async (id) => await api.delete(`${ buyers.delete }/${ id }`);

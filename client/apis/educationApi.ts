import request from 'superagent'
import { EducationType } from '../../models/education'

const urlPath = '/api/v1/education'

export async function getEducation() {
  try {
    const res = await request.get(urlPath)
    return res.body
  } catch (error) {
    console.error('API client side get education list:', error)
    throw error
  }
}

export async function getEducationById(id: number) {
  try {
    const res = await request.get(`${urlPath}/{id}`)
    return res.body
  } catch (error) {
    console.error('API client side get education by id:', error)
    throw error
  }
}

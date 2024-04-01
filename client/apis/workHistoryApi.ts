import request from 'superagent'

const urlPath = '/api/v1/workhistory'

export async function getWorkHistory() {
  try {
    const res = await request.get(urlPath)
    return res.body
  } catch (error) {
    console.error('API client side get work history list:', error)
    throw error
  }
}

export async function getWorkHistoryById(id: number) {
  try {
    const res = await request.get(`${urlPath}/{id}`)
    return res.body
  } catch (error) {
    console.error('API client side get work history by id:', error)
    throw error
  }
}

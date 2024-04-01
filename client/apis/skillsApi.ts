import request from 'superagent'

const urlPath = '/api/v1/skills'

export async function getSkills() {
  try {
    const res = await request.get(urlPath)
    return res.body
  } catch (error) {
    console.error('API client side skills: ', error)
    throw error
  }
}

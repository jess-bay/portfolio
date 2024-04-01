import connection from './connection'

const db = connection

export async function getWorkHistory() {
  try {
    return db('workHistory').select().orderBy('years')
  } catch (error) {
    console.error('Failed to load work history: ', error)
  }
}

export async function getSkills() {
  try {
    return db('skills').select().returning('*')
  } catch (error) {
    console.error('Failed to load skills: ', error)
  }
}

export async function getEducation() {
  try {
    return db('education').select().orderBy('year')
  } catch (error) {
    console.error('Failed to load education history: ', error)
  }
}

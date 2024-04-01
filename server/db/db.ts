import connection from './connection'
import { History } from '../../models/workHistory'
import { EducationType } from '../../models/education'
import { Skill } from '../../models/skills'

const db = connection

export async function getWorkHistory(): Promise<History[] | undefined> {
  try {
    return db('workHistory').select()
  } catch (error) {
    console.error('Failed to load work history: ', error)
  }
}
export async function getWorkHistoryById(
  id: number,
): Promise<History | undefined> {
  try {
    return db<History>('workHistory').where('id', id).first()
  } catch (error) {
    console.error('Failed to load work history id: ', error)
  }
}

export async function getSkills(): Promise<Skill[] | undefined> {
  try {
    return db('skills').select('*').orderBy('id')
  } catch (error) {
    console.error('Failed to load skills: ', error)
  }
}

export async function getEducation(): Promise<EducationType[] | undefined> {
  try {
    return db('education').select()
  } catch (error) {
    console.error('Failed to load education history: ', error)
  }
}

export async function getEducationById(
  id: number,
): Promise<EducationType | undefined> {
  try {
    return db<EducationType>('education').where('id', id).first()
  } catch (error) {
    console.error('Failed to load education id: ', error)
  }
}

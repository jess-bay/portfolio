import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/skills', async (req, res) => {
  try {
    const skills = db.getSkills()
    res.json(skills)
  } catch (error) {
    console.error('Failed on skills route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving skills')
  }
})

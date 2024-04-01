import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/education', async (req, res) => {
  try {
    const education = db.getEducation()
    res.json(education)
  } catch (error) {
    console.error('Error in education route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving education')
  }
})

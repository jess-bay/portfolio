import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/workhistory', async (req, res) => {
  try {
    const workHistory = db.getWorkHistory()
    res.json(workHistory)
  } catch (error) {
    console.error('Failed on work history route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving work history')
  }
})

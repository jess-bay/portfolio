import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const workHistory = await db.getWorkHistory()
    res.json(workHistory)
  } catch (error) {
    console.error('Failed on work history route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving work history')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const singleWHistory = await db.getWorkHistoryById(id)
    res.json(singleWHistory)
  } catch (error) {
    console.error('Error in work history id route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving work history id')
  }
})

export default router

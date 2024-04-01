import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const education = await db.getEducation()
    res.json(education)
  } catch (error) {
    console.error('Error in education route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving education')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const singleEdProvider = await db.getEducationById(id)
    res.json(singleEdProvider)
  } catch (error) {
    console.error('Error in education id route: ', error)
    res.sendStatus(500).send('Something went wrong retrieving education id')
  }
})

export default router

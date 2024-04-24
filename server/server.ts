import express from 'express'
import * as Path from 'node:path'
import skillsRoutes from './routes/skills.ts'
import educationRoutes from './routes/education.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/skills', skillsRoutes)
server.use('/api/v1/education', educationRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server

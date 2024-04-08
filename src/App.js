import express from 'express'
import Routes from './api/routes/taskRoutes.js'

const app = express()

app.use(express.json())

app.use(Routes)

export default app
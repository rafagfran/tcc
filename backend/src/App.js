import express from 'express'
import Routes from './api/routes/taskRoutes.js'
import Cors from 'cors'

const app = express()

app.use(express.json())

app.use(Cors())

app.use(Routes)

export default app
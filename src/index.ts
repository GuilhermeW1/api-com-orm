import 'reflect-metadata'
import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './router'
import './database/connect'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3000, () => console.log('ta rodando'))

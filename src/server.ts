import 'reflect-metadata'
import express from 'express'
import './database'
import { router } from './routes'
/*
    migrations:
    yarn typeorm migration:create -n CreateUsers
    yarn typeorm migration:run
*/

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log("Server is running")) //yarn dev
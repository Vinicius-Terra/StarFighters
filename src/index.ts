import cors from 'cors'
import express from 'express'
import * as operacoesController from './controllers/rankAndBattleController'

const app = express()
app.use(cors())

app.get('/ranking', operacoesController.rank)
app.post('/battle', operacoesController.battle)

const PORT: number = 5000

app.listen(5000, () => console.log(`Listening to port: ${PORT}`))
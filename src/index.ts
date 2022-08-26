import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()

app.use(express.json())

app.use('/api/diaries', diaryRouter)

app.listen(4000, () => {
  console.log('Servidor corriendo')
})

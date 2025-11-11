import express from 'express'
import authRouter from './routers/authRouter.js'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import customerRouter from './routers/customerRouter.js'
import cors from 'cors'
import { logger } from './middlewares/logger.js'

const app = express()
const port = 3333

app.use(logger)
app.use(cors())//Gabilita o CORS para todas as rotas e origins
app.use(express.json()) //converte os dados dos usuarios em json ou coisa assim

app.use('/auth', authRouter)
app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/customer', customerRouter)


app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})

import express from 'express'
import {ErrorHandler} from './middlewares/index.js'
import { PORT } from './config/index.js'
import { Router } from './routes/index.js'
const app = express()

app.use('/api',Router);
app.use(ErrorHandler);
app.listen(PORT, ()=>{
    console.log(`Listening on PORT:${PORT}`);
})
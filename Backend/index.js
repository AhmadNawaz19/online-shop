import express  from 'express'
const app = express();

import cors from 'cors';
app.use(cors())
app.use(express.json())

import { UserLogin } from './Routes/setUser.js';
import { CheckData } from './Middleware/checkUserData.js';

app.get('/', (req, res) => {
    res.send("hello")
})

app.post('/user', CheckData, UserLogin)

app.listen(8000)
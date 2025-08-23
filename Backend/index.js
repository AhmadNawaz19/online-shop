import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

app.use(express.json());

import { addItem } from './router/AddItemToModel.js';
import { Getproduct } from './router/getProduct.js';
import { RemoveProduct } from './router/RemoveProduct.js';

app.post('/addItem', addItem )
app.get('/getProduct', Getproduct)
app.post('/RemovePro', RemoveProduct)

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(8000);
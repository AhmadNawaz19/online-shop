import { InsertData } from "../models/productModel.js";

export const addItem = async (req, res) => {
    let {id, title,picture, price} = req.body;
    let response = await InsertData(id, title, picture, price)
    res.send(response)
}
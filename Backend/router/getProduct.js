import { GetItem } from "../models/productModel.js"

export const Getproduct = async (req, res) => {
    let result = await GetItem();
    res.send(result) 
}
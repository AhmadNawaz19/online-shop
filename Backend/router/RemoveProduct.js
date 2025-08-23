import { RemoveItem } from "../models/productModel.js";
export const RemoveProduct = async (req, res) => {
    let {id} = req.body;
    let response = await RemoveItem(id);
    res.send(response)
}
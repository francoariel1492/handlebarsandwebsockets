import { Router } from "express";
import CartManager from "../taskfile/cartManager.js"

const cartRoute = Router();
const carro = new CartManager()

cartRoute.get("/:cid", async(req, res)=>{
    const cid = req.params.cid
    res.send(await carro.getCarrito(cid))
})

cartRoute.post("/",async (req, res) => {
    const cart = res.send(await carro.createCart());
})


cartRoute.post("/:cid/product/:pid",async (req, res) => {
    const pid = req.params.pid;
    const cid = req.params.cid

    const producto = res.send(await carro.addCarrito(parseInt(cid),parseInt(pid)));
})

cartRoute.delete("/:cid", async(req, res)=>{
    const cid = req.params.cid
    res.send(await carro.deleteCart(cid))
})


export default cartRoute
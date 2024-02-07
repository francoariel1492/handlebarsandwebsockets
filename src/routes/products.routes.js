import ProductManager from "../taskfile/productManager.js";
import { Router } from "express";

const prodRoute = Router();
const ejecutar = new ProductManager();


//pedido de productos por ID
prodRoute.get("/:pid", async (req, res) => {
  const pid = req.params.pid;
  res.send(await ejecutar.getProductById(parseInt(pid)))

});

//Pedido de listado completo
prodRoute.get("/:limit?", async (req,res)=>{
  const limit = parseInt(req.query.limit)
  res.send(await ejecutar.getProducts(limit))
  
})

//Subida de productos
prodRoute.post("/", async (req, res) => {
  res.send(await ejecutar.addProduct(req.body))   
});

//editado de producto
prodRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await ejecutar.updateProduct(id, req.body))
});

//borrado de producto
prodRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await ejecutar.deleteProduct(id))

});

export default prodRoute;

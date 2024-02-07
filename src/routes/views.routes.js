import { Router } from "express";

const viewsRoute = Router()

let prods = []

viewsRoute.get("/", (req, res) => {
    res.render("realtimeproducts", {})
});

viewsRoute.post("/", (req, res) => {
    const prodBody = req.body;
    console.log(userBody)
    const newProd = {
        ...prodBody, status: true,
    }

    prods.push(newProd)
})

viewsRoute.delete("/",(req, res)=>{
    const prodId = req.body
    console.log(prodId)
    prods = prods.filter(prod => prod.id!== prodId)



})




export default viewsRoute;


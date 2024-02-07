import cartRoute from "./routes/cart.routes.js";
import prodRoute from "./routes/products.routes.js";
import viewsRoute from "./routes/views.routes.js";
import handlebars from "express-handlebars";
import path from "path"
import {Server} from "socket.io"
import ProductManager from "./taskfile/productManager.js";

/// CONFIG SERVIDOR
import express from "express";
import { _dirname } from "./utils.js";

const app = express()
const PORT = 8080;

// SETEO DE PUERTO
const httpserver = app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
})


//IMPLEMENTACION SOCKET IO
const io = new Server(httpserver)

io.on('connection', (socket)=> {
  console.log('servidor de socket io conectado')

  socket.on('nuevoProducto', async (nuevoProd) => {
      const response = await manager.addProduct(nuevoProd)
      console.log(response)
      const products = await manager.getProducts()
      socket.emit('products-data', products)
      socket.emit("status-changed", response)
  })

  socket.on('update-products', async () => {
      const products = await manager.getProducts();
      socket.emit('products-data', products);
  });

  socket.on('remove-product', async (code) => {
      console.log("inicio remove socket")
      const result = await manager.deleteProduct(code) ;
      socket.emit("status-changed", result)
      const products = await manager.getProducts();
      socket.emit('products-data', products);
      console.log("fin remove socket")
  })
})


// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(_dirname + "/public"))
app.use('/realtimeproducts', express.static(path.join(_dirname, '/public')))
app.use('/home', express.static(path.join(_dirname, '/public')))



// CONFIG HANDLEBARS
app.engine("handlebars", handlebars.engine())
app.set("views", path.resolve(_dirname, "./views"))
app.set("view engine", "handlebars")


//Saludo
app.get("/", (req,res)=>{
res.render("index", {})
})

// VISTAS
app.get("/realtimeproducts", (req, res) => {
  res.render ("realtimeproducts", {} )
})

app.get("/home", async (req, res)=> {
  const products = await manager.getProducts()
  console.log(JS)
  res.render("home", {...products})
})

//ROUTES
app.use("/api/products", prodRoute);
app.use("/api/cart", cartRoute)
app.use("/api/realtimeproducts", viewsRoute);


const manager = new ProductManager()
//////////////////////////////////////////////////////////////////////////////////////

**//////////////////////// npm start para correr el programa////////////////////////////**

//////////////////////////////////////////////////////////////////////////////////////

# -----------------------------------TESTINNG-------------------------------------------

### RUTAS:<br>

1. localhost:8080/realtimeproducts/ ----> para el socket de actualización en tiempo real<br>

2. localhost:8080/home/ ----> para la vista de todos los productos en la tienda<br>



# ----------------------------------PREVIOS---------------------------------------------

### 1. PRODUCTS

Método GET http://localhost:8080/api/products/  --> listado de todos los productos<br>
Método GET http://localhost:8080/api/products?limit=# --> Listado de productos con limite de registros<br>
Método GET http://localhost:8080/api/products/:pid --> Devuelve aquel producto que coincida con el ID<br>
Método DELETE http://localhost:8080/api/products/:pid ---> borra item de la base de datos<br>
Método PUT  http://localhost:8080/api/products/:pid ---> modifica el producto de la base de datos<br>
Método POST http://localhost:8080/api/products/ --> volcando un producto en el body lo agrega a la BD, el método solo valida que no haya campos nullishv y que el codigo de producto no este repetido <br>
<br>
<br>
Dummy JSON ---> PARA PROBAR RUTA POST http://localhost:8080/api/products/<br>
 {
  "title": "Batatas Fritas",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "price": 33824,
  "thumbnail": "/et/ultrices/posuere/cubilia/curae/donec.json",
  "code": "MA8755",
  "stock": 286,
  "status": true
 } <br>


### 2. CART<br>
<br>
Método POST http://localhost:8080/api/cart/ --> Crea un carrito nuevo<br>
Método GET  http://localhost:8080/api/cart/:cartId --> Devuelve contenido de carrito según ID<br>
Método POST http://localhost:8080/api/cart/:cartId/product/:productId --> Agrega productos al carrito de acuerdo al Id de carrito y producto a agregar.<br>
Método DELETE http://localhost:8080/api/cart/:cartId --> borra el carrito de la base de datos<br>


const { Router } = require('express')
const productosController = require('../controllers/productos.controller')
const middlewares = require('../middlewares')
const schemas = require('../schemas')
const Producto = require('../models/producto')
const route = Router()

route.get('/productos', productosController.getAllProductos)

route.get('/productos/:id', middlewares.genericMiddleware.validateId(Producto), productosController.getProductoById)

route.post('/productos', middlewares.schemaValidator(schemas.productosSchema), productosController.createProducto)

route.delete('/productos/:id', middlewares.genericMiddleware.validateId(Producto), /*middlewares.genericMiddleware.validateAssociationsById(Producto, Fabricante), middlewares.genericMiddleware.validateAssociationsById(Producto, Componente),*/ productosController.deleteProductoById)

route.put('/productos/:id', middlewares.schemaValidator(schemas.productosSchema), middlewares.genericMiddleware.validateId(Producto), productosController.updateProductoById)

route.get('/productos/:id/componentes', middlewares.genericMiddleware.validateId(Producto), productosController.getProductoYSusComponentes)

route.post('/productos/:id/componentes', middlewares.genericMiddleware.validateId(Producto), middlewares.schemaValidator(schemas.componentesSchema), productosController.addComponenteToProducto)

route.get('/productos/:id/componentes/:componenteId', middlewares.genericMiddleware.validateId(Producto), middlewares.genericMiddleware.validateComponentId(Producto), productosController.getComponenteFromProducto)

route.put('/productos/:id/componentes/:componenteId', middlewares.genericMiddleware.validateId(Producto), middlewares.genericMiddleware.validateComponentId(Producto), middlewares.schemaValidator(schemas.componentesSchema), productosController.updateComponenteFromProducto)

/*
route.get('/productos/:id/fabricantes', middlewares.genericMiddleware.validateId(Producto), productosController.getProductoYSusFabricantes)

route.post('/productos/:id/fabricantes', middlewares.genericMiddleware.validateId(Producto), middlewares.schemaValidator(schemas.fabricantesSchema), productosController.addFabricanteToProducto)
*/

module.exports = route

/*
probamos crear productos sin validaciones, con otra estructura y solo toma los campos que coinciden en el modelo
mientras que si creamos un documento desde mongo express si podemos generarlo con cualquier estructura.

si esta bien usar joi para las validaciones o no tienen sentido con mongo tantas validaciones 

validad si existe id para componentes embebidos cambia de la validacion gral que tenemos en el middleware validateId

si es necesario hacer validaciones de componentes asociados antes de eliminar un producto porque los componentes estan embebidos 
en el producto

y si es necesario hacer validaciones de fabricantes asociados antes de eliminar un producto porque los fabricantes 
estan relacionados por id igual que en una bd relacional

nuestro metodo validateAssociationsById esta ok ? ? sirve tambien para mongo ?
*/
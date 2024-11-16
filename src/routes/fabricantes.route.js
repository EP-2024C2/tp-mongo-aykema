const { Router } = require('express')
const fabricantesController = require('../controllers/fabricantes.controller')
const middlewares = require('../middlewares')
const schemas = require('../schemas')
const Fabricante = require('../models/fabricante')
const Producto = require('../models/producto')
const route = Router()

route.get('/fabricantes', fabricantesController.getAllFabricantes)

route.get('/fabricantes/:id', middlewares.genericMiddleware.validateId(Fabricante), fabricantesController.getFabricanteById)

route.post('/fabricantes', middlewares.schemaValidator(schemas.fabricantesSchema), fabricantesController.createFabricante)

route.delete('/fabricantes/:id', middlewares.genericMiddleware.validateId(Fabricante), middlewares.genericMiddleware.validateAssociationsById(Fabricante, Producto), fabricantesController.deleteFabricanteById)

route.put('/fabricantes/:id', middlewares.schemaValidator(schemas.fabricantesSchema), middlewares.genericMiddleware.validateId(Fabricante), fabricantesController.updateFabricanteById)

route.get('/fabricantes/:id/productos', middlewares.genericMiddleware.validateId(Fabricante), fabricantesController.getFabricanteYSusProductos)

module.exports = route
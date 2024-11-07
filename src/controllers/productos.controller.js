const Producto = require("../models/producto")

const getAllProductos = async (req, res) => {
    const productos = await Producto.find()
    res.status(200).json(productos)
}

const getProductoById = async (req, res) => {
    const _id = req.params.id;
    const producto = await Producto.find({ _id })
    res.status(200).json(producto)
}

const createProducto = async (req, res) => {
    const producto = await Producto.create(req.body)
    res.status(201).json(producto)
}


module.exports = { getAllProductos, getProductoById, createProducto }
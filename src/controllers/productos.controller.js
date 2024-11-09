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

const deleteProductoById = async (req, res) => {
    const _id = req.params.id;
    const result = await Producto.deleteOne({ _id });
    res.status(200).json({ mensaje: `Filas afectadas: ${result.deletedCount}`});
}

const updateProductoById = async (req, res) => {
    const _id = req.params.id;
    const producto = await Producto.findByIdAndUpdate(_id, req.body, { new: true });
    res.status(200).json(producto)
}

const getProductoYSusComponentes = async (req, res) => {
    const _id = req.params.id;
    const producto = await Producto.findById(_id)
    res.status(200).json(producto.componentes)
}

const addComponenteToProducto = async (req, res) => {
    const _id = req.params.id;
    const producto = await Producto.findById(_id)
    producto.componentes.push(req.body)
    await producto.save()
    res.status(200).json(producto)
}

const getComponenteFromProducto = async (req, res) => {
    const _id = req.params.id;
    const _idComponente = req.params.componenteId
    const producto = await Producto.findById(_id)
    const componente = producto.componentes.id(_idComponente)
    res.status(200).json(componente)
}

const updateComponenteFromProducto = async (req, res) => {
    const _id = req.params.id;
    const _idComponente = req.params.componenteId
    const producto = await Producto.findById(_id)
    const componente = producto.componentes.id(_idComponente)
    componente.set(req.body)
    await producto.save()
    res.status(200).json(producto)
}

module.exports = { getAllProductos, getProductoById, createProducto, deleteProductoById, updateProductoById, getProductoYSusComponentes, addComponenteToProducto, getComponenteFromProducto, updateComponenteFromProducto }
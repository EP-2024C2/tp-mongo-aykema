const Fabricante = require('../models/fabricante')

const getAllFabricantes = async (req, res) => {
    const fabricantes = await Fabricante.find()
    res.status(200).json(fabricantes)
}

const getFabricanteById = async (req, res) => {
    const _id = req.params.id;
    const fabricante = await Fabricante.find({ _id })
    res.status(200).json(fabricante)
}

const createFabricante = async (req, res) => {
    const fabricante = await Fabricante.create(req.body)
    res.status(201).json(fabricante)
}

const deleteFabricanteById = async (req, res) => {
    const _id = req.params.id;
    const result = await Fabricante.deleteOne({ _id })
    res.status(200).json({ mensaje: `Filas afectadas: ${result.deletedCount}`})
}

const updateFabricanteById = async (req, res) => {
    const _id = req.params.id;
    const fabricante = await Fabricante.findByIdAndUpdate(_id, req.body, { new: true })
    res.status(200).json(fabricante)
}

const getFabricanteYSusProductos = async (req, res) => {
    const _id = req.params.id;
    const fabricante = await Fabricante.findById(_id).populate('productos')
    res.status(200).json(fabricante.productos)
}

module.exports = { getAllFabricantes, getFabricanteById, createFabricante, deleteFabricanteById, updateFabricanteById, getFabricanteYSusProductos }
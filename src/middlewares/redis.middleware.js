// middlewares/redis.middleware.js
const redisClient = require('../db/redis')

// Middleware para verificar cache
const checkCache = (collection) => (req, res, next) => {
    const id = req.params.id ?? -1
    const key = `${collection}:${id}`
    
    redisClient.get(key).then(data => {
        if (data) {
            return res.status(200).json(JSON.parse(data))
        }
        next()
    }).catch(() => next())
}

// Middleware para eliminar cache
const deleteCache = (collection) => (req, res, next) => {
    const id = req.params.id ?? -1

    // Si hay un ID específico, eliminar todas las keys que coincidan con el patrón
    if (id !== -1) {
        redisClient.keys(`${collection}:${id}:*`).then(keys => {
            if (keys.length > 0) {
                redisClient.del(keys)
            }
        })
        // También eliminar la key específica
        redisClient.del(`${collection}:${id}`)
    }
    
    const listKey = `${collection}:-1`
    redisClient.del(listKey)
    
    next()
}

// Middleware para guardar en cache
const saveToCache = (data, key) => {
    redisClient.setEx(key, 3600, JSON.stringify(data))
}

module.exports = { checkCache, deleteCache, saveToCache }
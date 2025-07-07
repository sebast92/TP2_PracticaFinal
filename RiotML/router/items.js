import express from 'express'
import Controlador from '../controller/items.js'


class Router {
    #controlador

    constructor(persistencia) {
        this.#controlador = new Controlador(persistencia)
    }

    start() {    
        const router = express.Router()
        router.get('/:id?', this.#controlador.obtenerItems)
        
        return router
    }
}

export default Router
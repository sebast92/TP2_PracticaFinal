import express from 'express'
import Controlador from '../controller/champions.js'


class Router {
    #controlador

    constructor(persistencia) {
        this.#controlador = new Controlador(persistencia)
    }


    start() {    
        const router = express.Router()
        router.get('/:quantity(\\d+)', this.#controlador.obtenerNuevosChamps)
        router.get('/:name', this.#controlador.obtenerChamp)
        
        
        return router
    }
}

export default Router
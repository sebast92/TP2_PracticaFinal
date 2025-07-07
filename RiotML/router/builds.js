import express from 'express'
import Controlador from '../controller/builds.js'


class Router {
    #controlador

    constructor(persistencia) {
        this.#controlador = new Controlador(persistencia)
    }


    start() {    
        const router = express.Router()
        router.get('/:id?', this.#controlador.obtenerBuilds)
        router.post('/', this.#controlador.guardarBuild)

        return router
    }
}

export default Router
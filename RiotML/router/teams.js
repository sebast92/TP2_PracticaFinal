import express from 'express'
import Controlador from '../controller/teams.js'


class Router {
    #controlador

    constructor(persistencia) {
        this.#controlador = new Controlador(persistencia)
    }


    start() {    
        const router = express.Router()
        router.post('/', this.#controlador.guardarTeam)
        router.get('/:id?', this.#controlador.obtenerTeams)
        
        return router
    }
}

export default Router
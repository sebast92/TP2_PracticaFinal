import ModelFactory from '../model/DAO/champions/championsFactory.js'
//import { validar } from './validaciones/champions.js'


class Servicio {
    #model

    constructor(persistencia) {
        this.#model = ModelFactory.get(persistencia)
    }

    obtenerChamp = async name => {
        if(name) {
            const champ = await this.#model.obtenerChamp(name)
            return champ
        }
        else {
            throw new Error(`No champ with ${id}.`)
        }
    }

    obtenerNuevosChamps = async q => {
        //const res = validar(producto)
        // if(res.result) {
        //     const productoGuardado = await this.#model.obtenerNuevosChamps(producto)
        //     return productoGuardado
        // }   
        const champs = await this.#model.obtenerNuevosChamps(q)
        if (champs.length != 0) {
            return champs
        } else {
            //console.log(res.error)
            //throw new Error(res.error.details[0].message)
            throw new Error("No more champs to select.")
        }
    }
}

export default Servicio
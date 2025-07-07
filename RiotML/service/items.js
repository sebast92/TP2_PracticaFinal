import ModelFactory from '../model/DAO/items/itemsFactory.js'
//import { validar } from './validaciones/champions.js'


class Servicio {
    #model

    constructor(persistencia) {
        this.#model = ModelFactory.get(persistencia)
    }

    obtenerItem = async id => {
        if(id) {
            const item = await this.#model.obtenerItem(id)
            return item
        }
        else {
            throw new Error(`No item with ${id}.`)
        }
    }

    obtenerItems = async id => {
        //const res = validar(producto)
        // if(res.result) {
        //     const productoGuardado = await this.#model.obtenerNuevosChamps(producto)
        //     return productoGuardado
        // }
        let items = []
        if (id) {
            items = await this.#model.obtenerItem(id)
        } else {
            items = await this.#model.obtenerItems()
        }
        if (items.length != 0) {
            return items
        } else {
            //console.log(res.error)
            //throw new Error(res.error.details[0].message)
            throw new Error("No items to select.")
        }
    }
}

export default Servicio
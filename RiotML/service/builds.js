import ModelFactory from '../model/DAO/builds/buildsFactory.js'
//import { validar } from './validaciones/champions.js'


class ServicioBuilds {
    #model

    constructor(persistencia) {
        this.#model = ModelFactory.get(persistencia)
    }

    obtenerBuild = async id => {
        if(id) {
            const build = await this.#model.obtenerBuild(id)
            return build
        }
        else {
            throw new Error(`No Build with ${id}.`)
        }
    }

    obtenerBuilds = async id => {
        //const res = validar(producto)
        // if(res.result) {
        //     const productoGuardado = await this.#model.obtenerNuevosChamps(producto)
        //     return productoGuardado
        // }
        let builds = []
        if(id) {
            builds = await this.#model.obtenerBuild(id)
        } else {
            builds = await this.#model.obtenerBuilds()
        }
        
        if (builds.length != 0) {
            return builds
        } else {
            //console.log(res.error)
            //throw new Error(res.error.details[0].message)
            throw new Error("No builds to select.")
        }
    }

    guardarBuild = async build => {
        //const res = validar(producto)
        const buildGuardada = await this.#model.guardarBuild(build)

        return buildGuardada

        // if(res.result) {
        //     const productoGuardado = await this.#model.guardarProducto(producto)
        //     return productoGuardado
        // }
        // else {
        //     //console.log(res.error)
        //     throw new Error(res.error.details[0].message)
        // }
    }
}

export default ServicioBuilds
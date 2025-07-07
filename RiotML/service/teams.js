import ModelFactory from '../model/DAO/teams/teamsFactory.js'
//import { validar } from './validaciones/champions.js'


class Servicio {
    #model

    constructor(persistencia) {
        this.#model = ModelFactory.get(persistencia)
    }

    obtenerTeam = async id => {
        if(id) {
            const team = await this.#model.obtenerTeam(id)
            return team
        }
        else {
            throw new Error(`No champ with ${id}.`)
        }
    }

    obtenerTeams = async id => {
        //const res = validar(producto)
        // if(res.result) {
        //     const productoGuardado = await this.#model.obtenerNuevosChamps(producto)
        //     return productoGuardado
        // }
        let teams = []
        if(id) {
            teams = await this.#model.obtenerTeam(id)
        } else {
            teams = await this.#model.obtenerTeams()
        }
        if (teams.length != 0) {
            return teams
        } else {
            //console.log(res.error)
            //throw new Error(res.error.details[0].message)
            throw new Error("No team to select.")
        }
    }

    guardarTeam = async team => {
        //const res = validar(producto)
        const teamGuardado = await this.#model.guardarTeam(team)
        return teamGuardado

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

export default Servicio
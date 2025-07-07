import Servicio from '../service/teams.js'


class Controlador {
    #servicio

    constructor(persistencia) {
        this.#servicio = new Servicio(persistencia)
    }

    obtenerTeam = async (req, res) => {
        try {
            
            const team = await this.#servicio.obtenerTeam(id)
            res.json(team)
        }
        catch(error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerTeams = async (req, res) => {
        try {
            const { id } = req.params
            const teams = await this.#servicio.obtenerTeams(id)
            res.json(teams)
        }
        catch(error) {
            //res.status(500).json({ error: error.details[0].message })
            res.status(500).json({ error: error.message })
        }
    }

    guardarTeam = async (req, res) => {
        try {
            
            const team = req.body
            console.log(team)

            if(!Object.keys(team).length) throw new Error('Empty team')
            const teamGuardado = await this.#servicio.guardarTeam(team)
            res.json(teamGuardado)
        }
        catch(error) {
            //res.status(500).json({ error: error.details[0].message })
            res.status(500).json({ error: error.message })
        }
    }
}

export default Controlador
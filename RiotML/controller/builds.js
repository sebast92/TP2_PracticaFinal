import Servicio from '../service/builds.js'


class Controlador {
    #servicio

    constructor(persistencia) {
        this.#servicio = new Servicio(persistencia)
    }

    obtenerBuild = async (req, res) => {
        try {
            const { id } = req.params
            const build = await this.#servicio.obtenerBuild(id)
            res.json(build)
        }
        catch(error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerBuilds = async (req, res) => {
        try {
            const { id } = req.params
            const builds = await this.#servicio.obtenerBuilds(id)
            res.json(builds)
        }
        catch(error) {
            //res.status(500).json({ error: error.details[0].message })
            res.status(500).json({ error: error.message })
        }
    }

    guardarBuild = async (req, res) => {
        try {
            const build = req.body

            if(!Object.keys(build).length) throw new Error('La build está vacío')
            const buildGuardada = await this.#servicio.guardarBuild(build)
            res.json(buildGuardada)
        }
        catch(error) {
            //res.status(500).json({ error: error.details[0].message })
            res.status(500).json({ error: error.message })
        }
    }
}

export default Controlador
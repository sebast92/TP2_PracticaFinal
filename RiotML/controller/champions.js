import Servicio from '../service/champions.js'


class Controlador {
    #servicio

    constructor(persistencia) {
        this.#servicio = new Servicio(persistencia)
    }


    obtenerChamp = async (req, res) => {
        try {
            const { name } = req.params
            const champ = await this.#servicio.obtenerChamp(name)
            res.json(champ)
        }
        catch(error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerNuevosChamps = async (req, res) => {
        try {
            const { quantity } = req.params
            const nuevosChamps = await this.#servicio.obtenerNuevosChamps(quantity)
            res.json(nuevosChamps)
        }
        catch(error) {
            //res.status(500).json({ error: error.details[0].message })
            res.status(500).json({ error: error.message })
        }
    }
}

export default Controlador
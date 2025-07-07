import Servicio from '../service/items.js'


class Controlador {
    #servicio

    constructor(persistencia) {
        this.#servicio = new Servicio(persistencia)
    }

    obtenerItem = async (req, res) => {
        try {
            const { id } = req.params
            const item = await this.#servicio.obtenerItem(id)
            res.json(item)
        }
        catch(error) {
            res.status(500).json({ error: error.message })
        }
    }

    obtenerItems = async (req, res) => {
        try {
            const { id } = req.params
            const items = await this.#servicio.obtenerItems(id)    

            res.json(items)
        }
        catch(error) {
            console.log(error)
            //res.status(500).json({ error: error.details[0].message })
            res.status(500).json({ error: error.message })
        }
    }

}

export default Controlador
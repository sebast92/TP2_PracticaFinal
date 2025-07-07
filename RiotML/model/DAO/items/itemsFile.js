
import fs from 'fs'


class ModelFile {
    #nombreArchivo

    constructor() {
        this.#nombreArchivo = 'items_local.json'
    }

    obtenerItems = async () =>  { return await this.#leerArchivo(this.#nombreArchivo) }

    obtenerItem = async id => {
        const items = await this.obtenerItems()
        const item = items[String(id)]        //.find(p => p.name === id)
        return item || {}
    }

    #leerArchivo = async nombre => {
        let items = []
        try {
            items = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch { }

        return items
    }
}

export default ModelFile
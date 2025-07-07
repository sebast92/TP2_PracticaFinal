
import fs from 'fs'
//Seria bueno probar si puedo usar el CDN de los assets del juego en vez de tener guardadas las imagenes

class ModelFile {
    #nombreArchivo

    constructor() {
        this.#nombreArchivo = 'champions_local.json'//'champions.json'
    }
    // Para no romper interfaz tendria que leer en vez de recibir la coleccion, tendria que escribir el archivo en cada paso
    obtenerChamp = async (name) => {
        const champs = await this.#leerArchivo(this.#nombreArchivo)
        this.#checkChampionsLength(champs)
        ///const champ = this.#champions.find(p => p.id === id)
        let value = champs[name] || {}
        return value
    }

    #checkChampionsLength = async champs => {
        if (champs == {}) {
            throw new Error("No more champs to select.")
        } 
    }

    obtenerNuevosChamps = async q => {
        let champs_read = await this.#leerArchivo(this.#nombreArchivo)
        let champs_names = Object.keys(champs_read)
        let champs = []

        for (let i = 0; i < q; i++) {
            let index = Math.floor(Math.random() * champs_names.length)
            champs_names = Object.keys(champs_read)
            let champ_name = champs_names[index]
            let champ = await this.obtenerChamp(champ_name)
            champs.push(champ)

            delete champs_read[champ_name]
            delete champs_names.splice(index, 1)
            this.#escribirArchivo(this.#nombreArchivo, champs_read)
        }
        return champs
    }

    #leerArchivo = async nombre => {
        let champs = []
        try {
            champs = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch (error) {
            console.log(error)
         }

        return champs
    }

    #escribirArchivo = async (nombre, champs) => {
        await fs.promises.writeFile(nombre, JSON.stringify(champs, null, '\t'))
    }
    
}

export default ModelFile
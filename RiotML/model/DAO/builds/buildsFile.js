
import fs from 'fs'


class ModelFile {
    #nombreArchivo

    constructor() {
        this.#nombreArchivo = 'builds.json'
    }

    obtenerBuilds = async () => { return await this.#leerArchivo(this.#nombreArchivo) }

    obtenerBuild = async id => {
        const builds = await this.obtenerBuilds()
        this.#checkBuildsLength(builds)
        
        let keys = Object.keys(builds)
        const build = builds.find(p => p.id === id)
        return build || {}
    }

    guardarBuild = async build => {
        const builds = await this.obtenerBuilds()
        build.id = String(parseInt(builds[builds.length - 1]?.id || 0) + 1)   // ?. -> optional chaining
        build.win_rate = Math.random()

        builds.push(build)
        await this.#escribirArchivo(this.#nombreArchivo, builds)
        
        return build
    }

    #checkBuildsLength = async builds => {
        if (builds.length == 0) {
            throw new Error("No teams to select.")
        }
    }

    #leerArchivo = async nombre => {
        let builds = []
        try {
            builds = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch { }

        return builds
    }

    #escribirArchivo = async (nombre, builds) => {
        await fs.promises.writeFile(nombre, JSON.stringify(builds, null, '\t'))
    }

}

export default ModelFile
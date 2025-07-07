
import fs from 'fs'


class ModelFile {
    #nombreArchivo

    constructor() {
        this.#nombreArchivo = 'teams.json'
    }

    obtenerTeams = async () => { return await this.#leerArchivo(this.#nombreArchivo) }

    obtenerTeam = async id => {
        const teams = await this.obtenerTeams()
        this.#checkTeamsLength(teams)
        const team = teams.find(p => p.id === id)
        return team || {}
    }

    guardarTeam = async team => {
        //const productos = await this.#leerArchivo(this.#nombreArchivo)
        const teams = await this.obtenerTeams()
        team.id = String(parseInt(teams[teams.length - 1]?.id || 0) + 1)   // ?. -> optional chaining
        team.win_rate = Math.random()

        teams.push(team)
        await this.#escribirArchivo(this.#nombreArchivo, teams)
        return team
    }

    #checkTeamsLength = async teams => {
        if (teams.length == 0) {
            throw new Error("No teams to select.")
        }
    }

    #leerArchivo = async nombre => {
        let teams = []
        try {
            teams = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch { }

        return teams
    }

    #escribirArchivo = async (nombre, teams) => {
        await fs.promises.writeFile(nombre, JSON.stringify(teams, null, '\t'))
    }

}

export default ModelFile
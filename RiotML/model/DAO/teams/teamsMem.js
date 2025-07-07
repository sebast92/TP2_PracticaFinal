
class ModelMem {
    #teams

    constructor() {
        this.#teams = [
            // { id: '1',  nombre: 'TV',       precio: 1234.56,    stock: 55 },
            // { id: '2',  nombre: 'Mesa',     precio: 2345.67,    stock: 77 },
            // { id: '3',  nombre: 'Mouse',    precio: 3456.78,    stock: 99 },
        ]
    }

    #checkTeamsLength = async teams => {
        if (this.#teams.length == 0) {
            throw new Error("No teams to select.")
        } else {
            return True
        }
    }

    obtenerTeams = async () => this.#teams

    obtenerTeam = async id => {
        teams = this.obtenerTeams()
        this.#checkTeamsLength(teams)
        const team = this.#teams.find(p => p.id === id)
        return team || {}
    }
    
    guardarTeam = async team => {
        team.id = String(parseInt(this.#teams[this.#teams.length-1]?.id || 0) + 1)   // ?. -> optional chaining
        team.win_rate = Math.random()
        this.#teams.push(team)
        return team
    }
}

export default ModelMem
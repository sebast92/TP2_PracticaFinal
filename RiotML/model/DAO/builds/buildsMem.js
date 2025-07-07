
class ModelMem {
    #builds

    constructor() {
        this.#builds = [
            // { id: '1',  nombre: 'TV',       precio: 1234.56,    stock: 55 },
            // { id: '2',  nombre: 'Mesa',     precio: 2345.67,    stock: 77 },
            // { id: '3',  nombre: 'Mouse',    precio: 3456.78,    stock: 99 },
        ]
    }

    #checkBuildLength = async () => {
        if (this.#builds.length == 0) {
            throw new Error("No build to select.")
        } else {
            return True
        }
    }

    obtenerBuilds = async () => this.#builds

    obteneeBuild = async id => {
        this.#checkBuildLength()
        const build = this.#builds.find(p => p.id === id)
        return build || {}
    }
    
    guardarBuild = async build => {
        build.id = String(parseInt(this.#builds[this.#builds.length-1]?.id || 0) + 1)   // ?. -> optional chaining
        build.win_rate = Math.random()
        this.#builds.push(build)
        return build
    }
}

export default ModelMem
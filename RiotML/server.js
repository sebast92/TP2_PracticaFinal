import express from 'express'
import RouterChampions from './router/champions.js'
import RouterTeams from './router/teams.js'
import RouterItems from './router/items.js'
import RouterBuilds from './router/builds.js'
//import CnxMongoDB from './model/DBMongo.js'
import cors from 'cors'

class Server {
    #port
    #persistencia
    #server

    constructor(port, persistencia) {
        this.#port = port
        this.#persistencia = persistencia
        this.#server = null
    }

    async start() {
        console.log("Server.start")
        console.log(this.#persistencia)
        // -----------------------------------------------
        //             APLICACIÓN EXPRESS
        // -----------------------------------------------
        const app = express()

        // -----------------------------------------------
        //            MIDDLEWARES EXPRESS
        // -----------------------------------------------
        app.use(cors())
        app.use(express.static('public'))
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))


        // -----------------------------------------------
        //           API RESTful: productos
        // -----------------------------------------------
        app.use('/api/champions', new RouterChampions(this.#persistencia).start())
        app.use('/api/teams', new RouterTeams(this.#persistencia).start())
        app.use('/api/items', new RouterItems(this.#persistencia).start())
        app.use('/api/builds', new RouterBuilds(this.#persistencia).start())
        // ------------------------------------------------------------------
        //    CONECTO LA BASE DE DATOS AL SERVICIO EN CASO QUE SE REQUIERA
        // ------------------------------------------------------------------
        // if(this.#persistencia == 'MONGODB') {
        //     await CnxMongoDB.conectar()
        // }        

        // -----------------------------------------------
        //        LISTEN DEL SERVIDOR EXPRESS
        // -----------------------------------------------
        const PORT = this.#port
        this.#server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
        this.#server.on('error', error => console.log(`Error en servidor: ${error.message}`))

        return app
    }

    async stop() {
        if(this.#server) {
            this.#server.close()
            await CnxMongoDB.desconectar()
            this.#server = null
        }
    }
}

export default Server
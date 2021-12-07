const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const { socketController } = require('../sockets/controller.socket');

class Server {
    
    constructor() {
        this.app    = express();
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')(this.server)

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Sockets
        this.sockets();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('src/public') );

    }

    sockets() {
        this.io.on('connection', ( socket ) => socketController(socket, this.io ) )
    }

    listen(port) {
        this.server.listen( port, () => {
            console.log('Servidor corriendo en puerto', port );
        });
    }
}

module.exports = Server;
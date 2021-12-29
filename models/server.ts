import express , { Application } from 'express';
import { createServer,Server as httpserver } from 'http';
const cors = require('cors');

class Server {

    private app:Application;
    private port:string;
    private paths:any;
    private httpserver:httpserver;
    private io;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.httpserver = createServer();
        this.io = require('socket.io')(this.httpserver);
        this.paths = { ejemplo:'/api/ejemplo' }
        this.middlewares();
        //this.routes();
    }

    middlewares(){
        this.app.use(cors()); this.app.options('*',cors());
    }

    routes(){
        this.app.use(this.paths.ejemplo,require('../routes/ejemplo'));
    }

    listen(){
        this.httpserver.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
            console.log("tsc --watch && nodemon dist/app.js &&");
        })
    }

}

export default Server;
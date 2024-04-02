import express, {Request, Response} from 'express';
import cors from 'cors'
import routesProducto from "../routes/producto";
import db from '../db/connection';

import routesSpecialPrice from "../routes/specialPrice";

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`running in port: ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/productos', routesProducto);
        this.app.use("/api/products", routesSpecialPrice); 
    }

    midlewares(){
        //parsear el body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

   async dbConnect() {

        await db.authenticate();
        console.log('data base conect')
    }

}

export default Server




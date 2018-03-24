import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';

export class DefaultController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/', this.hello.bind(this));
    }

    private async hello(req: Request, res: Response): Promise<void> {
        res.send({message: "Hello World!"});
    }
}

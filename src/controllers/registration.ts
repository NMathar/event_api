import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {registrationService} from '../services/registration';

export class RegistrationController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/event/:id/registrations', this.list.bind(this));
        httpServer.get('/event/:id/registration/:rid', this.getById.bind(this));
        httpServer.post('/event/:id/registration', this.create.bind(this));
        httpServer.del('/event/:id/registration/:rid', this.remove.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {
        res.send(await registrationService.list(req.params.id));
    }

    private async getById(req: Request, res: Response): Promise<void> {
        const registration = await registrationService.getById(req.params.id);
        res.send(registration ? 200 : 404, registration);
    }

    private async create(req: Request, res: Response): Promise<void> {
        res.send(await registrationService.create(req.params.id, req.body));
    }

    private async remove(req: Request, res: Response): Promise<void> {
        try {
            await registrationService.delete(req.params.bid);
            res.send(200);
        }
        catch (e) {
            console.error(e);
            res.send(500);
        }
    }
}

import {Controller} from './controller';
import {HttpServer} from '../server/httpServer';
import {Request, Response} from 'restify';
import {eventService} from '../services/event';

export class EventController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/events', this.list.bind(this));
        httpServer.get('/event/:id', this.getById.bind(this));
        httpServer.post('/event', this.create.bind(this));
        httpServer.put('/event/:id', this.update.bind(this));
        httpServer.del('/event/:id', this.remove.bind(this));
    }

    public async list(req: Request, res: Response): Promise<void> {
        res.send(await eventService.list());
    }

    private async getById(req: Request, res: Response): Promise<void> {
        const event = await eventService.getById(req.params.id);
        res.send(event ? 200 : 404, event);
    }

    private async create(req: Request, res: Response): Promise<void> {
        res.send(await eventService.create(req.body));
    }

    private async update(req: Request, res: Response): Promise<void> {
        res.send(await eventService.update({...req.body, id: req.params.id}));
    }

    private async remove(req: Request, res: Response): Promise<void> {
        try {
            await eventService.delete(req.params.id);
            res.send(200);
        }
        catch (e) {
            res.send(500);
        }
    }
}

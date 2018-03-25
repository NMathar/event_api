import {Event} from '../models/event';
import {DatabaseProvider} from '../database/index';

export class EventService {
    public async getById(id: number): Promise<Event> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Event).findOneById(id);
    }

    public async create(event: Event): Promise<Event> {
        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newEvent = new Event();
        newEvent.name = event.name;
        newEvent.start = event.start;
        newEvent.end = event.end;

        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Event).save(newEvent);
    }

    public async list(): Promise<Event[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Event).find();
    }

    public async update(event: Event): Promise<Event> {
        console.log(event);
        const connection = await DatabaseProvider.getConnection();
        const repository = connection.getRepository(Event);
        const entity = await repository.findOneById(event.id);
        entity.name = event.name;
        entity.start = event.start;
        entity.end = event.end;
        return await repository.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Event).removeById(id)
    }
}

export const eventService = new EventService();

import {Registration} from '../models/registration';
import {DatabaseProvider} from '../database/index';
import {Event} from '../models/event';

export class RegistrationService {
    public async list(customerId: number): Promise<Registration[]> {
        const connection = await DatabaseProvider.getConnection();
        return connection.getRepository(Registration).find({
            where: {
                customer: customerId
            }
        });
    }

    public async create(eventId: number, registration: Registration): Promise<Registration> {
        const connection = await DatabaseProvider.getConnection();

        // Normally DTO !== DB-Entity, so we "simulate" a mapping of both
        const newReg = new Registration();
        newReg.title = registration.title;
        newReg.sum = registration.sum;

        const event = await connection.getRepository(Event).findOneById(eventId);

        if (!event) {
            return;
        }

        newReg.event = event;

        return await connection.getRepository(Registration).save(newReg);
    }

    public async getById(id: number): Promise<Registration> {
        const connection = await DatabaseProvider.getConnection();
        return connection.getRepository(Registration).findOneById(id);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(Registration).removeById(id);
    }
}

export const registrationService = new RegistrationService();

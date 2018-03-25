import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Event} from './event';

@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @CreateDateColumn()
    created: Date;

    @Column()
    seats: number;

    @ManyToOne(type => Event, event => event.registrations)
    event: Event;
}

import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Event} from './event';

@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public sum: number;

    @ManyToOne(type => Event, event => event.registrations)
    public event: Event;
}

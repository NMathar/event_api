import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Registration} from './registration';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    start: Date;

    @Column()
    end: Date;

    @Column()
    created: Date;

    @OneToMany(type => Registration, registration => registration.event)
    registrations: Registration[];
}

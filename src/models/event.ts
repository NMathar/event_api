import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Registration} from './registration';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public start: Date;

    @Column()
    public end: Date;

    @OneToMany(type => Registration, registration => registration.event)
    public registrations: Registration[];
}

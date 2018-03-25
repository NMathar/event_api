import {Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn} from 'typeorm';
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

    @CreateDateColumn()
    created: Date;

    @OneToMany(type => Registration, registration => registration.event)
    registrations: Registration[];
}

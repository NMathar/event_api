import {EventController} from './event';
import {RegistrationController} from './registration';
import {DefaultController} from './default'

export const CONTROLLERS = [
    new EventController(),
    new RegistrationController(),
    new DefaultController()
];

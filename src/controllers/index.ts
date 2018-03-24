import {CustomerController} from './customer';
import {BillController} from './bill';
import {DefaultController} from './default'

export const CONTROLLERS = [
    new CustomerController(),
    new BillController(),
    new DefaultController()
];

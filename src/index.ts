import 'reflect-metadata';
import {Server} from './server/index';
import {DatabaseProvider} from './database/index';
import * as dbconfig from '../ormconfig.js'

DatabaseProvider.configure(dbconfig);

const server = new Server();
server.start(+process.env.PORT || 8080);

export {server};
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {server} from '../src/index';

const app = server.restify;

chai.use(chaiHttp);
const expect = chai.expect;

const eventData = {
    'name': 'Test Event 123',
    'start': '12.02.1991',
    'end': '1-1-1970'
};

describe('createEventData', () => {

    it('insert new event', () => {
        chai.request(app).post('/event')
            .send(eventData)
            .then(res => {
                // expect(res.type).to.eql('application/json');

                //set global id for more actions
                const ID = res.body.id;
                describe('getEventData', () => {
                    it('check datetime event id data', () => {
                        chai.request(app).get('/event/' + ID)
                            .then(res => {
                                expect(res.body.created).to.eql(new Date().toLocaleString("de-DE", {timeZone: "Europe/Berlin"}));
                            });
                    });

                    it('check event id data', () => {
                        chai.request(app).get('/event/' + ID)
                            .then(res => {
                                expect(res.body.name).to.eql(eventData.name);
                            });
                    });
                })
            }).catch(function (err) {
            throw err;
        });
    });
});
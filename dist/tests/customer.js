"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let restify = require('restify-plugins');
require("mocha");
// init the test client
let client = restify.createJsonClient({
    url: 'http://127.0.0.1:8080',
    version: '*'
});
describe('service: get endpoint', function () {
    // Test #1
    describe('200 response check', function () {
        it('should get a 200 response', function (done) {
            client.get('/customers', function (err, req, res, data) {
                if (err) {
                    throw new Error(err);
                }
                else {
                    if (data.code != 200) {
                        throw new Error('invalid response from /post');
                    }
                    done();
                }
            });
        });
    });
});

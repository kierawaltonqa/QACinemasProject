'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const { PAYMENT } = require('../config/CONSTS.json');



describe(`Payment Routes`, () => {

    it(`Test /create route`, (done) => {

        chai.request(app)
            .post(`${PAYMENT}/create`)
            .send({

                'fullName': 'Darius Brown',
                'cardType': 'visa',
                'cardNumber': 1234567890,
                'expiryDate': '31/09/2022',
                'CVC': 123

            })
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.have.status(201);
                expect(response).to.not.be.undefined;
                done();
            });
    });

    it(`Test /getAll route`, (done) => {
        chai.request(app)
            .get(`${PAYMENT}/getAll`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((payment) => expect(payment).to.contain.keys("_id"));

                done();
            });
    });

    after(() => {
        app.close();
    });
});


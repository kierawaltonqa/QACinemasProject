'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const { PAYMENT } = require('../config/CONSTS.json');
const { Payment } = require('../config/db')



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



    //!testing line 17 catching the error - validation error in json
    it('Test create fail', (done) => {
        chai.request(app)
            .post(`${PAYMENT}/create`)
            .send({

                'fullNam': 'Darius Brown',
                'cardType': 'visa',
                'cardNumber': 1234567890,
                'expiryDate': '31/09/2022',
                'CVC': 123

            })
            .end((err, response) => {
                if (err) done(err);


                expect(response).to.have.status(500);

                done();
            });
    });

    //!Testing line 25 {next(err)} 

    it(`Test /getAll error`, (done) => {

        chai.request(app)
            .get(`${PAYMENT}/getAl`)
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.throw;
                expect(response).to.have.status(404);
                done();
            })
    })



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
        Payment.deleteMany({}, (err) => console.log(err));
        app.close();
    });
});


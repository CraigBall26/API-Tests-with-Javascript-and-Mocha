import supertest from 'supertest';
const request = supertest('https://fakerestapi.azurewebsites.net/api/v1/');
import { expect } from 'chai';

describe('POST new valid user', () => {
    it('POST /users', () => {
        const data = {
            id: 1000,
            userName: 'PostTestName',
            password: 'PostTestPassword',
        };

        return request
            .post('users')
            .send(data)
            .then((res) => {
                expect(res.body.id).to.eq(data.id)
                expect(res.body.userName).to.eq(data.userName)
                expect(res.body.password).to.eq(data.password)
        });
     });
   });

describe('POST attempt with invalid id', () => {
    it('POST /users', () => {
        const data = {
            id: 'thiswontwork',
            userName: 'PostTestName',
            password: 'PostTestName2',
        };

        return request
            .post('users')
            .send(data)
            .then((res,err) => {
                expect(res.body.status).to.eq(400);
        });
     });
   });

describe('POST new valid user id, username, with a password of null', () => {
    it('POST /users', () => {
        const data = {
            id: 2000,
            userName: 'PostTestName',
            password: null,
        };

        return request
            .post('users')
            .send(data)
            .then((res) => {
                expect(res.body.id).to.eq(data.id)
                expect(res.body.userName).to.eq(data.userName)
                expect(res.body.password).to.eq(null)
        });
     });
   });



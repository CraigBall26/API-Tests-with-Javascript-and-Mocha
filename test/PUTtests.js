import supertest from 'supertest';
const request = supertest('https://fakerestapi.azurewebsites.net/api/v1/');
import { expect } from 'chai';

describe('PUT/EDIT existing user', () => {
    it('PUT /users/', () => {
        const data = {
            id: 2,
            userName: 'EditedTestName',
            password: 'EditedPassword',
        };

        return request
        .put('users/2')
        .send(data)
        .then((res) => {
            expect(res.body.userName == data.userName);
            expect(res.body.password == data.password);
        });
    });
});

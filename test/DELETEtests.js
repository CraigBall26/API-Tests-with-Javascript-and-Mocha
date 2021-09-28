import supertest from 'supertest';
const request = supertest('https://fakerestapi.azurewebsites.net/api/v1/');
import { expect } from 'chai';

describe('DELETE existing user', () => {
    it('GET /users', () => {
        return request.get('users/1').then((res) => {
          expect(res.body.id).to.be.eq(1);

          return request.delete('users/1').then((res) => {
            expect(res.body.id == null);
            });
        });
    });
});
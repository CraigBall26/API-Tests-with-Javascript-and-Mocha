import supertest from 'supertest';
const request = supertest('https://fakerestapi.azurewebsites.net/api/v1/');
import { expect } from 'chai';

describe('GET all existing users', () => {
   it('GET /users', () =>{
      request.get('users').end((err,res) => {
      });
    });
  });

describe('GET individual ID', () => {
    it('GET /users', () => {
        return request.get('users/1').then((res) => {
          expect(res.body.id).to.be.eq(1);
        });
      });
    });

    
describe('GET error response from invalid ID', () => {
    it('GET /users', () => {
        return request.get('users/-1').then((res) => {
          expect(res.body.status).to.be.eq(404);
        });
      });
    });

  
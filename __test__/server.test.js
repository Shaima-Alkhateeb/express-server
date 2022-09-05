'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app); //To facke running the server

describe('API server', () => {

  it('Home page works', async () => { //test the home page //async, await is for the request and it get back as a promise and I need to wait for it
    const res = await request.get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hello World'); //To test the text that I get back
  });

  it( 'Person Route Works', async () => {
    const res = await request.post( '/person' ).query( {
      name: 'Shaima',
      age: 55,
      gender: 'female'
    });
    expect(res.status).toEqual(200);
    // expect(res.text).toEqual('60');
  });
});

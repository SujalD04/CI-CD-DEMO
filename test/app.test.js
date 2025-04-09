const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');

describe('GET /api/ping', () => {
  it('should respond with pong', async () => {
    const res = await request(app).get('/api/ping');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('pong');
  });
});

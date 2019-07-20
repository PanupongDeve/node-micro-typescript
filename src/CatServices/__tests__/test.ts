import app from '../appTest';
import * as request from "supertest";

describe('GET / - a simple api endpoint', () => {
    it('Hello API Request', async () => {
        const result = await request(app).get('/api/cats');
        expect(result.statusCode).toEqual(200);
    });
});

describe('Post / - a simple api endpoint', () => {
    it('responds with json', (done) => {
        request(app)
          .post('/api/cats')
          .send({'name': 'john'})
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            console.log(res.body);
            done();
          });
      });
});
import "typescript-transform-paths";
import supertest from "supertest";
import app from '../src/app';
import prisma from '../src/database/db';
import { ItensSchema } from "protocols/itensProtocols";

const api = supertest(app);

beforeAll(async () => {
    await prisma.itens.deleteMany({});
});

afterAll(async () => {
    await prisma.itens.deleteMany({})
})


describe('GET /itens', () => {

    it('should respond with empty array if no itens', async () => {
        const results = await api.get('/itens');
        
        expect(results.status).toBe(200);

        expect(results.body).toEqual([])
    })
});

describe('POST /itens', () => {

    it('should respond with the item posted', async () => {

        const post: ItensSchema = {
            "name": "Barbie",
            "genre": 1,
            "platform": 1,
            "status": 1
        }
        const results = await api.post('/itens').send(post);

        expect(results.status).toBe(201);
    })
})
import "typescript-transform-paths";
import supertest from "supertest";
import app from '../src/app';
import prisma from '../src/database/db';
import { ItensSchema } from "protocols/itensProtocols";
import { createGenre, createGenreItemRelation, createItem, createPlatform, createPlatformItemRelation, createStatus, createStatusItemRelation, deleteItem } from "./factories/itens-factory";
import { cleanDb } from "./helpers";

const api = supertest(app);

beforeEach(async () => {
    await cleanDb();
});


describe('GET /itens', () => {

    it('should respond with empty array if no itens', async () => {
        const results = await api.get('/itens');

        expect(results.status).toBe(200);

        expect(results.body).toEqual([])
    })
});

describe('POST /itens', () => {

    it('should respond status 409 if invalid body', async () => {
        const body = {
            "name": "Barbie"
        }

        const response = await api.post('/itens').send(body);
        expect(response.status).toBe(409);
        expect(response.body).toEqual({
            "message": expect.any(Array)
        })
    });

    it('should respond status 409 if item already exists', async () => {
        const body = {
            "name": "Barbie"
        }

        await api.post('/itens').send(body);
        const response = await api.post('/itens').send(body);

        expect(response.status).toBe(409);
        expect(response.body).toEqual({
            "message": expect.any(Array)
        })
    });

    it('should respond status 200 with the item posted', async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const status = await createStatus('Watching');

        const body = {
            "name": "Barbie",
            "genre": genre.id,
            "platform": platform.id,
            "status": status.id
        }

        const response = await api.post('/itens').send(body);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            "id": expect.any(Number),
            "name": "Barbie",
            "genre": genre.genre,
            "platform": platform.name,
            "status": status.status
        })
    })
})

describe('PUT /itens/:id', () => {

    it('should respond status 404 if item does not exist', async () => {
        const newStatus = await createStatus('Watched');
        const newBody = {
            status: newStatus.id,
        }

        const response = await api.put(`/itens/1`).send(newBody);
        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            "message": expect.any(String)
        })
    });

    it('should respond status 200 with the item posted', async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const status = await createStatus('Watching');

        const body = {
            "name": "Barbie",
            "genre": genre.id,
            "platform": platform.id,
            "status": status.id
        }

        const response = await api.post('/itens').send(body);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            "id": expect.any(Number),
            "name": "Barbie",
            "genre": genre.genre,
            "platform": platform.name,
            "status": status.status
        })
    })
})

describe('DELETE /itens/:id', () => {

    it('should respond status 404 if item does not exist', async () => {

        const response = await api.delete(`/itens/1`);
        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            "message": expect.any(String)
        })
    });

    it('should respond status 200 with the item posted', async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const status = await createStatus('Watching');

        const body = {
            "name": "Barbie",
            "genre": genre.id,
            "platform": platform.id,
            "status": status.id
        }

        const results = await api.post('/itens').send(body);
        const response = await api.delete(`/itens/${results.body.id}`);

        expect(response.status).toBe(200);
    })
})
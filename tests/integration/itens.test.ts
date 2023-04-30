import "typescript-transform-paths";
import supertest from "supertest";
import app from '../../src/app';
import { createBodyToSend, createGenre, createItem, createItemGenreRelation, createItemPlatformRelation, createItemStatusRelation, createPlatform, createStatus } from "../factories/itens-factory";
import { cleanDb } from "../helpers";
import { faker } from "@faker-js/faker";

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
            name: faker.commerce.productName(),
        }

        const response = await api.post('/itens').send(body);
        expect(response.status).toBe(409);
        expect(response.body).toEqual({
            "message": expect.any(Array)
        })
    });

    it('should respond status 409 if item already exists', async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const status = await createStatus('Watching');

        const item = await createItem();
        await createItemGenreRelation(item.id, genre.id);
        await createItemPlatformRelation(item.id, platform.id);
        await createItemStatusRelation(item.id, status.id);

        const body = await createBodyToSend(genre.id, platform.id, status.id, item.name)


        const response = await api.post('/itens').send(body);

        expect(response.status).toBe(409);
        expect(response.body).toEqual({
            "message": "This item was already added"
        })
    });

    it('should respond status 200 with the item posted', async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const status = await createStatus('Watching');

        const body = await createBodyToSend(genre.id, platform.id, status.id);

        const response = await api.post('/itens').send(body);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            "id": expect.any(Number),
            "name": body.name,
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

        const body = await createBodyToSend(genre.id, platform.id, status.id)

        const response = await api.post('/itens').send(body);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            "id": expect.any(Number),
            "name": body.name,
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

        const body = await createBodyToSend(genre.id, platform.id, status.id)

        const results = await api.post('/itens').send(body);
        const response = await api.delete(`/itens/${results.body.id}`);

        expect(response.status).toBe(200);
    })
})
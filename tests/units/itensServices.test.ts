import { faker } from "@faker-js/faker";
import itensServices from "services/itensServices";
import itensRepositories from "repositories/itensRepositories";
import { jest } from '@jest/globals';

const itemFormat = {
    id: faker.datatype.number(),
    name: faker.datatype.string(),
    genre: faker.datatype.string(),
    platform: faker.datatype.string(),
    status: faker.datatype.string(),
};

describe('GET /itens', () => {
    it('should respond list of itens empty', async () => {
        jest.spyOn(itensRepositories, "listAllItens").mockImplementationOnce((): any => {
            return [];
        })

        const response = await itensServices.listAllItens();
        expect(response).toStrictEqual([]);
    });

    it('should respond list with all itens', async () => {

        jest.spyOn(itensRepositories, "listAllItens").mockImplementationOnce((): any => {
            return [
                itemFormat
            ];
        })

        const response = await itensServices.listAllItens();
        expect(response).toStrictEqual([
            itemFormat
        ]);
    });
});

describe('POST /itens', () => {
    it('should post item', async () => {

        jest.spyOn(itensRepositories, "findItemByName").mockImplementationOnce((): any => {
            return undefined;
        });

        jest.spyOn(itensRepositories, "postItem").mockImplementationOnce((): any => {
            return null;
        });

        jest.spyOn(itensRepositories, "findItemByName").mockImplementationOnce((): any => {
            return [
                itemFormat.id,
                itemFormat.name
            ];
        });

        jest.spyOn(itensRepositories, "addItemInfo").mockImplementationOnce((): any => {
            return [
                itemFormat
            ];
        });

        jest.spyOn(itensRepositories, "findItem").mockImplementationOnce((): any => {
            return itemFormat;
        });

        const body = {
            name: itemFormat.name,
            genre: faker.datatype.number(),
            platform: faker.datatype.number(),
            status: faker.datatype.number(),
        }

        const response = await itensServices.postItem(body);
        expect(response).toBe(itemFormat);
        expect(itensRepositories.findItemByName).toBeCalled();
        expect(itensRepositories.postItem).toBeCalled();
        expect(itensRepositories.addItemInfo).toBeCalled();
        expect(itensRepositories.findItem).toBeCalled();

    });

    it('should not post item if already exist', () => {
        jest.spyOn(itensRepositories, "findItemByName").mockImplementationOnce((): any => {
            return itemFormat.id, itemFormat.name;
        });

        const body = {
            name: itemFormat.name,
            genre: faker.datatype.number(),
            platform: faker.datatype.number(),
            status: faker.datatype.number(),
        }
        
        const response = itensServices.postItem(body);
        expect(response).rejects.toStrictEqual({
            name: 'ConflictError',
            message: 'This item was already added',
        });
        expect(itensRepositories.findItemByName).toBeCalled();

    })
});

describe('PUT /itens', () => {
    it('should update item', async () => {
        jest.spyOn(itensRepositories, "findItemById").mockImplementationOnce((): any => {
            return itemFormat.id, itemFormat.name;
        });

        jest.spyOn(itensRepositories, "updateItem").mockImplementationOnce((): any => {
            return null;
        });

        jest.spyOn(itensRepositories, "findItem").mockImplementationOnce((): any => {
            return {
                id: itemFormat.id,
                name: itemFormat.name,
                genre: itemFormat.genre,
                platform: itemFormat.platform,
                status: body.status
            };
        });

        const body = {
            id: itemFormat.id,
            status: faker.datatype.number(),
        }

        const response = await itensServices.updateItem(body);
        expect(response.id).toBe(body.id);
        expect(response.status).toBe(body.status)
        expect(itensRepositories.findItemById).toBeCalled();
        expect(itensRepositories.updateItem).toBeCalled();
        expect(itensRepositories.findItem).toBeCalled();
    });

    it('should not update if item does not exist', async () => {
        jest.spyOn(itensRepositories, "findItemById").mockImplementationOnce((): any => {
            return false;
        });

        const body = {
            id: itemFormat.id,
            status: faker.datatype.number(),
        };

        const response = itensServices.updateItem(body);
        expect(response).rejects.toStrictEqual({
            name: "NotFoundError",
            message: "This item was not found",
        })
    })
});

describe('DELETE /itens', () => {
    it('should delete item', async () => {
        jest.spyOn(itensRepositories, "findItemById").mockImplementationOnce((): any => {
            return {
                id: itemFormat.id,
                name: itemFormat.name,
            };
        });

        jest.spyOn(itensRepositories, "deleteItem").mockImplementationOnce((): any => {
            return undefined;
        });

        const body = {
            id: itemFormat.id,
        };

        const response = await itensServices.deleteItem(body);
        expect(response).toBe(undefined);
        expect(itensRepositories.findItemById).toBeCalled();
        expect(itensRepositories.deleteItem).toBeCalled();

    });

    it('should not delete if item does not exist', () => {
        jest.spyOn(itensRepositories, "findItemById").mockImplementationOnce((): any => {
            return undefined;
        });

        const body = {
            id: itemFormat.id,
        };

        const response = itensServices.deleteItem(body);
        expect(response).rejects.toStrictEqual({
            name: "NotFoundError",
            message: "This item was not found",
        });
        expect(itensRepositories.findItemById).toBeCalled();

    });
})
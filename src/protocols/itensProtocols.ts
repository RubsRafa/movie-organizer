export type ItensFormat = {
    id: number;
    name: string;
    genre: string;
    platform: string;
    status: string;
}
export type AddItemType = {
    id?: number | string,
    name?: string;
    genre?: number;
    platform?: number;
    status?: number;
}

export type TypesOfSchema = {
    name?: string;
    genre?: string | number;
    platform?: string | number;
    status?: string | number;
}

export type ErrorsType = {
    name: string;
    message: string | string[];
}

export type IdType = {
    id: string;
}

export type DataParams = {
    id: number;
    name: string;
    genre: string;
    platform: string;
    status: string;
}

export type ItensSchema = {
    name: string;
    genre: number;
    platform: number;
    status: number;
}
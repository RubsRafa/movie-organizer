function conflictError(message: string | string[]) {
    return {
        name: "ConflictError",
        message
    }
};

function notFoundError(message: string) {
    return {
        name: "NotFoundError",
        message
    };
};

export default {
    conflictError,
    notFoundError,
}
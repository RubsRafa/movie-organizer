function conflictError(message: string) {
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

function conflictErrorValidationSchema(message: string | string[]) {
    return {
        name: "ConflictError",
        message
    }
};

export default {
    conflictError,
    notFoundError,
    conflictErrorValidationSchema,
}
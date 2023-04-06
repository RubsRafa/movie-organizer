function conflictError(message: string | string[]) {
    return {
        name: "ConflictError",
        message
    }
};

// function unauthorizedError(message: string) {
//     return {
//         name: "UnauthorizedError",
//         message
//     };
// };

// function duplicatedEmailError(message: string) {
//     return {
//         name: "DuplicatedEmailError",
//         message
//     }
// };

function notFoundError(message: string) {
    return {
        name: "NotFoundError",
        message
    };
};

// function forbiddenError(message: string) {
//     return {
//         name: "ForbiddenError",
//         message
//     }
// }

// function invalidCredentialError() {
//     return {
//         name: "InvalidCredentialsError",
//         message: "Email or password are incorrect",
//     };
// };

// function unprocessableEntityError() {
//     return {
//         name: "UnprocessableEntityError",
//         message: "This type or format is invalid",
//     };
// };

export default {
    conflictError,
    // unauthorizedError,
    // duplicatedEmailError,
    notFoundError,
    // forbiddenError,
    // invalidCredentialError,
    // unprocessableEntityError
}
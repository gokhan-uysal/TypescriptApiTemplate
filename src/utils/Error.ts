export const ErrorMessage = {
    DbItemNotFound: (item: string) => {
        return `Requested ${item} not found`;
    },
    DbItemAlreadyExists: (item: string) => {
        return `Requested ${item} already exists`;
    },
    MissingRequestProperty: (item: string) => {
        return `${item} is missing`;
    },
    InvalidQueryEntry: `Query is invalid`,
    MissingQueryProperty: (property: string) => {
        return `${property} is missing in request query`;
    },
    MissingParamsProperty: (property: string) => {
        return `${property} is missing in request params`;
    },
    MissingBodyProperty: (property: string) => {
        return `${property} is missing in request body`;
    },
    DatabaseFailure: `Failed to reach database`
};

export class HttpError extends Error {
    public readonly statusCode: number;
    public constructor(message: string = 'Internal Server Error', statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

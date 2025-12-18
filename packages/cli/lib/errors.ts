export class MissingArgumentError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'MissingArgumentError';
    }
}

const parseError = (error: string): Record<string, unknown> | string => {
    let errorParsed;
    try {
        errorParsed = JSON.parse(error) as Record<string, unknown>;
    } catch (_) {
        errorParsed = error;
    }

    return errorParsed;
};

export class HttpRequestError extends Error {
    public readonly name: string;
    public readonly httpCode: number;

    constructor(
        name: string,
        httpCode: number,
        description: string
    ) {
        super(description);

        // Restore the prototype chain, as the 'super' call breaks it
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
    }
}

declare class Client {
    baseUrl: string;
    constructor(baseUrl: string);
    get(): Promise<any>;
}
export default Client;

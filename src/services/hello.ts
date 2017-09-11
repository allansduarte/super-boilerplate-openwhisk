import { IApiResponse } from './../../src/types/ApiResponse';

export class HelloService {

    private _param1: number;
    private _param2: number;

    private _response: any;

    constructor(private _params: any) {
        this._iniciar();
    }

    public request(): Promise<any> {
        const scope: HelloService = this;

        return new Promise(
            (resolve) => {
                // To do your logic
                const bodyResponse: string = JSON.stringify(scope._param1 + scope._param2);

                const apiResponse: IApiResponse = {
                    body: bodyResponse,
                    statusCode: 200,
                };
                scope.setResponse(apiResponse);

                resolve();
            },
        );
    }

    public getResponse() {
        return this._response;
    }

    public setResponse(response: IApiResponse) {
        this._response = response;
    }

    private _iniciar() {
        this._param1 = this._params.param1 || 1;
        this._param2 = this._params.param2 || 1;
    }

}

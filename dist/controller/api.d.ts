import { ApiService } from "../service/api";
export declare class ApiController {
    private apiService;
    constructor(apiService: ApiService);
    oauth(code: string): void;
}

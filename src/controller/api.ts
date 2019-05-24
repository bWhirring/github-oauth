import { inject } from "inversify";
import { controller, httpGet, queryParam } from "inversify-express-utils";

import { ApiService } from "../service/api";
import TYPES from "../constant/types";

@controller("/api")
export class ApiController {
  constructor(@inject(TYPES.ApiService) private apiService: ApiService) {}

  @httpGet("/oauth")
  public oauth(@queryParam("code") code: string) {
    console.log(code, "code");
    this.apiService.oauth(code);
  }
}

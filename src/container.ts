import { Container } from "inversify";
import TYPES from "./constant/types";
import { ApiService } from "./service/api";

let containter = new Container();
containter.bind<ApiService>(TYPES.ApiService).to(ApiService);

export default containter;

import { controller, httpGet } from "inversify-express-utils";

@controller("/")
export class HomeController {
  private clientId: Readonly<string> = "c3a19c203e57e32ffd8a";

  @httpGet("/")
  public get(): string {
    const href = `https://github.com/login/oauth/authorize?client_id=${
      this.clientId
    }&redirect_uri=http://localhost:8888/api/oauth`;
    return `<html><div style='color: red'>
      <a href=${href}>Login with GitHub</a>
    </div></html>`;
  }
}

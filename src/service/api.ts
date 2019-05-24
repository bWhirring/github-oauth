import { injectable } from "inversify";
import axios from "axios";

@injectable()
export class ApiService {
  private clientId: Readonly<string> = "c3a19c203e57e32ffd8a";
  private clientSecret: Readonly<string> =
    "2317e759701f8481ee2a5173fbcb1f2a0cf3d6b9";

  public async oauth(code: string) {
    const res = await axios({
      method: "POST",
      url: `https://github.com/login/oauth/access_token?client_id=${
        this.clientId
      }&client_secret=${this.clientSecret}&code=${code}`,
      headers: {
        accept: "application/json"
      }
    });
    const { access_token } = res.data;
    const result = await axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        accept: "application/json",
        Authorization: `token ${access_token}`
      }
    });
    console.log(result.data);
    return result.data;
  }
}

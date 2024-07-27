import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../../types/loginSchema";
import { getLoginState } from "./getLoginState";
describe("getLoginState", () => {
  test("should return login schema", () => {
    const login: LoginSchema = {
      password: "123",
      username: "artur",
    };

    const state: Partial<StateSchema> = {
      login,
    };

    expect(getLoginState(state as StateSchema)).toEqual(login);
  });
});

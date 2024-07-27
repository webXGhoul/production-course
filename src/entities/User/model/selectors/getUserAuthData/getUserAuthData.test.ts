import { StateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";

describe("getUserAuthData", () => {
  test("with userData", () => {
    const state: Partial<StateSchema> = {
      user: {
        authData: {
          id: "",
          username: "Ivan",
        },
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: "",
      username: "Ivan",
    });
  });
});

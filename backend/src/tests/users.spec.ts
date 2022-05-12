import request from "supertest";
import { describe, it, afterAll } from "@jest/globals";
import { sampleUserData } from "../utils/sample-data";
import App from "../app";
import { User } from "../interfaces/users.interface";
import UserRoute from "../routes/users.route";

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});

describe("Testing Users", () => {
  describe("[GET] /users", () => {
    it("response statusCode 200 ", () => {
      const findUser: User[] = sampleUserData;
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer())
        .get(`${usersRoute.path}`)
        .expect(200, { data: findUser, message: "findAll" });
    });
  });
});

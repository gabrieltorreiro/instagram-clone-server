import request from "supertest";
import app from "../app";

jest.useRealTimers();

describe("User Route", () => {
  test("GET /user", async () => {
    const response = await request(app).get("/user");
    console.log(response);
    expect(response.status).toBe(200);
  });
});

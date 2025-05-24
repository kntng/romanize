import { describe, it, expect, } from "bun:test";
import request from "supertest";
import { app } from "../src/index";


describe("POST /korean", () => {
  it("should return romanized result", async () => {
    const res = await request(app.callback())
      .post('/korean')
      .set("Content-Type", "application/json")
      .send(JSON.stringify({ text: "한글" }));

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ romanized: "hangeul" });
  });

  it("should return 400 for missing text", async () => {
    const res = await request(app.callback())
      .post('/korean')
      .set("Content-Type", "application.json")
      .send(JSON.stringify({}));

    expect(res.status).toBe(400);
  });
});

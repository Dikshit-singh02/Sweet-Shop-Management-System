const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/User");

describe("AUTH API TESTS", () => {

  // Connect to DB before tests
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  // Clean users before each test
  beforeEach(async () => {
    await User.deleteMany({});
  });

  // Close DB after tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  /**
   * REGISTER TEST
   */
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "testuser@example.com",
        password: "password123"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  /**
   * DUPLICATE REGISTER TEST
   */
  it("should not allow duplicate email registration", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "testuser@example.com",
        password: "password123"
      });

    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Another User",
        email: "testuser@example.com",
        password: "password123"
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Email already registered");
  });

  /**
   * LOGIN TEST
   */
  it("should login user and return JWT token", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Login User",
        email: "loginuser@example.com",
        password: "password123"
      });

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "loginuser@example.com",
        password: "password123"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  /**
   * WRONG PASSWORD TEST
   */
  it("should reject login with wrong password", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Wrong Password User",
        email: "wrongpass@example.com",
        password: "password123"
      });

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "wrongpass@example.com",
        password: "wrongpassword"
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Invalid credentials");
  });

});

import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRoutes);

export default app;
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import { appRouter } from "./routers";
import { createContext } from "./_core/context";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());
app.use(express.json());

/* -------- API -------- */
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

/* -------- FRONTEND -------- */
const clientPath = path.join(__dirname, "../dist/public");

app.use(express.static(clientPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

/* -------- START -------- */
const port = Number(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
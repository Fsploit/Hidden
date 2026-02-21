// index.js
import express from "express";
import fs from "fs";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

app.get("/myscript.lua", (req, res) => {
  const filePath = path.join(process.cwd(), "myscript.lua");
  const luaCode = fs.readFileSync(filePath, "utf-8");
  res.setHeader("Content-Type", "text/plain");
  res.send(luaCode);
});

export default app;

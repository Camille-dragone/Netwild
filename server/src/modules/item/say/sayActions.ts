import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to NetWild !");
};

export default { sayWelcome };

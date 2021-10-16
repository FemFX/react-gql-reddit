import { Request, Response, Express } from "express";
export type MyContext = {
  req: Request & { session: any };
  res: Response;
};

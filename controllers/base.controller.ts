import { Request, Response } from "express";

export default class BaseController {
  post = (req: Request, res: Response) => {
    res.json({
      success: true,
      msg: "Hello",
    });
  };

  get = (req: Request, res: Response) => {
    res.json({
      success: true,
      msg: "Hello",
    });
  };
}

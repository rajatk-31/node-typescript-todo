import { Request, Response } from "express";
import mongoose from "mongoose";

export default class BaseController {
  model: mongoose.Model<any, any>;
  modelName: string;

  constructor(model: mongoose.Model<any, any>) {
    this.model = model;
    this.modelName = model.modelName;
  }

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

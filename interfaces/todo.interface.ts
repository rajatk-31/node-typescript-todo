import { CommentsI } from "./exports.interface";

export interface TodoI {
  id?: String;
  title: String;
  description?: String;
  status: Number;
  comments: [CommentsI];
}

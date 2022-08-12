import app from "./app";
import mongoose from "./db";

app.listen(5000, () => {
  console.log("Port started at 5000");

  mongoose
    .connect("mongodb://localhost:27017/todoapp")
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((e: any) => {
      console.log("Error connecting to the DB");
      console.log(e.message);
    });
});

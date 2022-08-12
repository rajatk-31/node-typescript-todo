import * as express from "express";
import router from "./routes/index";
import * as morgan from "morgan";

const app = express();
app.use(morgan("tiny"));
app.use("/api", router);

export default app;
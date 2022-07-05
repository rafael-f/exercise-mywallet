import cors from "cors";
import express from "express";
import router from "./routers/router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHandlerMid);
export default app;

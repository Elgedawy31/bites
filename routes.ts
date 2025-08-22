import express from "express";
const app = express();
import Couisines from "./routes/couisines";
import Restaurants from "./routes/restaurants";

app.use("/couisines", Couisines);
app.use("/restaurants", Restaurants);

export default app;
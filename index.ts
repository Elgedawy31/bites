import express  from "express";
import routes from './routes.ts'
import { errorHandler } from "./middlewares/errorHandler.ts";
const port = process.env.PORT || 3000;

const app  = express();

app.use(express.json());

app.use(routes)
app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
}).on('error' , (error) =>{
  throw new Error(error.message || "Server is not running");
});
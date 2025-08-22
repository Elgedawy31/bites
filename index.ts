import express  from "express";

const port = process.env.PORT || 3000;

const app  = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error' , (error) =>{
  throw new Error(error.message || "Server is not running");
});
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//import routes
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";

const app = express();
const URI =
  "mongodb+srv://web73:web73@projet-final-web73.d4lbg0v.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(3001, () => {
  console.log("Server has been run!");
});

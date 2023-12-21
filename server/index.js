import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

//import routes
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import infoUserRouter from "./routes/infoUser.js";
import employerRouter from "./routes/employer.js";

const app = express();
const URI =
  "mongodb+srv://web73:web73@projet-final-web73.d4lbg0v.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/infouser", infoUserRouter);
app.use("/employer", employerRouter);

app.listen(3001, () => {
  console.log("Server has been run on 3001!");
});

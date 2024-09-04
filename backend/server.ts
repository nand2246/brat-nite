import express, { Application } from "express";
import Server from "./src/index";
import { connect } from "mongoose";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

connect(
  "mongodb+srv://nandpats:Q6sGePYxOPg12jp5@brat-nite.0tw5s.mongodb.net/?retryWrites=true&w=majority&appName=brat-nite"
).then(() => console.log("connected to db"));

app
  .listen(PORT, function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });

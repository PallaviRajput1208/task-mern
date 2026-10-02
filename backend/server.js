require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("API running"));

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`),
);

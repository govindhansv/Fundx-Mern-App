const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

app.use(express.json());

app.use(cors());

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const adminRouter = require("./routes/adminRoutes");

app.use("/api/user", userRouter);
app.use("/api/auth/admin", adminRouter);
app.use("/api/auth/user", authRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server is running on port 5000")
);

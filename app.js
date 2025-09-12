const express = require("express");
const cookieParser = require("cookie-parser");
const blogRouter = require("./routes/blog.routes.js");
const errorMiddleware = require("./middleware/error.middleware.js");
const connectDB = require("./config/db.js");
const { PORT } = require("./config/env.js");
const authRouter = require("./routes/auth.routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`App is listening of http://localhost:${PORT}`);
  await connectDB();
});

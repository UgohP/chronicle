const express = require("express");
const connectDB = require("./database/mongodb.js");
const blogRouter = require("./routes/blog.routes.js");
const errorMiddleware = require("./middleware/error.middleware.js");

const app = express();

const PORT = 6500;

app.use(errorMiddleware);

app.use("/api/v1/blogs", blogRouter);

app.listen(PORT, async () => {
  console.log(`App is listening of http://localhost:${PORT}`);
  await connectDB();
});

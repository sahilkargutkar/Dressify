const app = require("./app");

const dotenv = require("dotenv");
const connectDB = require("./config/database");

//uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down server due to uncaught exception");
});

//Config
dotenv.config({ path: "backend/config/config.env" });

//Connect Database

connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT} `);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

const express = require("express");
const limiter = require("./limiter");
const logger = require("./logger");

const app = express();

// Apply rate limiter to all routes
app.use(limiter);

// Basic route
app.get("/", (req, res) => {
  logger.info(`Request to / from IP: ${req.ip}`);
  res.send("Hello, World!");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

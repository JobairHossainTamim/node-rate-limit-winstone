const rateLimit = require("express-rate-limit");
const logger = require("./logger");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (request, response, next, options) => {
    if (request.rateLimit.used === request.rateLimit.limit) {
      logger.info(`Rate limit exceeded for IP: ${request.ip}`, {
        ip: request.ip,
      });

      response.status(429).send({
        error: "Too many requests, please try again later.",
        rateLimit: {
          limit: options.limit,
          remaining: 0,
          resetTime: new Date(Date.now() + options.windowMs).toISOString(),
        },
      });
      response.status(options.statusCode).send(options.message);
    }
  },
});

module.exports = limiter;

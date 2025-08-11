Express API with Logger & Rate Limiting – Quick Notes

# 1. Logger (Winston)

- Records important events (requests, errors, warnings).
- Helps with debugging and monitoring.
- Can log to console and files.

2. Rate Limiting (express-rate-limit)

- Restricts how many requests a user/IP can make in a time window.
- Protects from brute force attacks & server overload.
- Example: limit: 10 requests every 15 minutes.

# 3. How It Works

Postman (or browser) sends request → Express server →

- a) Limiter checks request count.
- b) Logger records request details.
- c) Response is sent (or blocked if over limit).

# 4. Benefits

- Better security.
- Easier debugging.
- Prevents abuse of the API.

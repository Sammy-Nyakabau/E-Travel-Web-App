const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({
      stack: true,
    }),
    format.splat(),
    format.json(),
    format.colorize({
      all: true,
    }),
    format.prettyPrint()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `quick-start-combined.log`.
    // - Write all logs error (and below) to `quick-start-error.log`.
    //
    new transports.File({
      filename: "quick-start-error.log",
      level: "error",
    }),
    new transports.File({
      filename: "quick-start-combined.log",
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: "exceptions.log",
    }),
    new transports.Console(),
  ],
});

module.exports = logger;

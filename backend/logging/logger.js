const winston = require("winston");

const logger = winston.createLogger({
    // Log only if level is less than (meaning more severe) or equal to this
    level: process.env.LOGGER_LEVEL,
    // Use timestamp and printf to create a standard log format
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (info) => `${new Date(info.timestamp)} ${info.level}: ${info.message}`
        )
    ),

    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logging/app.log" }),
    ],
});


module.exports = logger
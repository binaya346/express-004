import winston from "winston";

const { combine, timestamp, printf, colorize, errors } = winston.format;

/* Define a custom format for the logs */
const customFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = winston.createLogger({
    level: "info", // Default level to log
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        customFormat
    ),
    transports: [
        /* 1. Log errors into a specific file */
        new winston.transports.File({ 
            filename: "logs/error.log", 
            level: "error" 
        }),
        new winston.transports.File({ 
            filename: "logs/info.log", 
            level: "info" 
        }),
    ],
});

// if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: combine(
            colorize(),
            customFormat
        ),
    }));
// }

export default logger;
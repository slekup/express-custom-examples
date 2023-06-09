const colors = require('colors');
const winston = require('winston');

/**
 * Returns a color based on the log level.
 * @param level The log level.
 * @returns The colored log level.
 */
const levelColor = (level) => {
  switch (level) {
    case 'error': {
      return colors.red(level.toUpperCase());
    }
    case 'warn': {
      return colors.yellow(level.toUpperCase());
    }
    case 'info': {
      return colors.green(level.toUpperCase());
    }
    case 'debug': {
      return colors.blue(level.toUpperCase());
    }
    case 'trace': {
      return colors.magenta(level.toUpperCase());
    }
    default: {
      return colors.white(level.toUpperCase());
    }
  }
};

/**
 * The format for the console transport.
 */
const consoleFormat = winston.format.combine(
  // winston.format.prettyPrint(),
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.ms(),
  winston.format.errors({ stack: true }),
  // winston.format.splat(),
  // winston.format.json(),
  winston.format.printf(({ timestamp, ms, level, message, stack }) => {
    let msg = message;

    // Append the stack trace to the message if it is present
    if (stack) msg += `\n${stack}`;

    /* eslint-disable no-control-regex */
    const ANSI_REGEX = /\u001b\[[0-9]{1,2}m/gi;

    return `${colors.gray(timestamp)} (${colors.magenta(ms)}) [${levelColor(
      level.replace(ANSI_REGEX, '')
    )}]: ${msg}`;
  })
);

/**
 * The logger instance.
 */
const logger = winston.createLogger({
  level: 'debug',
  format: consoleFormat,
  transports: [
    // Console transport
    new winston.transports.Console({
      level: 'info',
    }),
  ],
});

export default logger;

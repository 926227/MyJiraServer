import log from 'pino';
import dayjs from 'dayjs';

export const logger = log({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `, "time": "${dayjs().format()}"`,
});

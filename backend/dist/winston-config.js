"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonConfig = void 0;
const winston_1 = require("winston");
exports.winstonConfig = {
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
                return `${timestamp} [${level}]: ${message}`;
            })),
        }),
        new winston_1.transports.File({ filename: 'logs/combined.log' }),
    ],
};
//# sourceMappingURL=winston-config.js.map
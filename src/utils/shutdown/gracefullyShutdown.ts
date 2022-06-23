import http from 'http';
import logger from '../logger';

export default function enableGracefullyShutdown(server: http.Server): void {
    process.on('SIGINT', () => {
        logger.info(
            'Got SIGINT (aka ctrl + c - manual shutdown). Graceful shutdown',
            new Date().toISOString()
        );
        graceFullyShutdown(server);
    });
    process.on('SIGTERM', () => {
        logger.warn(
            'Got SIGTERM (docker container stop!!). Graceful shutdown',
            new Date().toISOString()
        );
        graceFullyShutdown(server);
    });
}

const graceFullyShutdown = (server: http.Server) => {
    server.close((error) => {
        if (error) {
            logger.error(error);
            process.exitCode = 1;
        }
        process.exit();
    });
};

import http from 'http';
import app from './app';
import logger from './utils/logger';
import enableGracefullyShutdown from './utils/shutdown/gracefullyShutdown';
import { connectToDatabase } from './services/mongo';
interface AddressInfo {
    address: string;
    family: string;
    port: number;
}



void (async () => {
    await connectToDatabase();
    
    const server = http.createServer(app);
    enableGracefullyShutdown(server);

    server.listen(process.env.APP_PORT, () => {
        const { port } = <AddressInfo>server.address();
        logger.info(`Started at port ${port} in ${process.env.NODE_ENV } environment...`);
    });
})();

import mongoose, { ConnectionOptions } from 'mongoose';
import logger from '../../utils/logger';

const { MONGO_DB_URI } = process.env;

export async function connectToDatabase(): Promise<typeof mongoose | null> {
    const opts: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        /**
         * @todo we are trying disabling this new feature in order to solve an issue regarding mongo's indexes
         */
        // useCreateIndex: true,
        useFindAndModify: false,
    };
    const mongooseConnection = await mongoose.connect(MONGO_DB_URI, opts);
    if (!mongooseConnection.connection) {
        logger.error("Couldn't connect to mongo with mongoose driver");
        return null;
    }
    return mongooseConnection;
}

export default mongoose;

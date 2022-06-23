import { default as router } from './users.api';
import * as service from './users.service';

export default {
    router,
    routerPrefix: 'users',
    service,
};

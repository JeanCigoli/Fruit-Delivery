import { server } from './application';
import { SERVER } from '../utils/constants';
import errorLogger from '../utils/error-logger';
import knex from '../infra/db/mysql/helpers/connection';

(async () => {
  try {
    await knex.raw('SELECT 1');
    server.listen(SERVER.PORT, async () => {
      console.log(`Server is running on port: ${SERVER.PORT}`);
      console.log(`Database is running`);
    });
  } catch (error) {
    console.log(error);
    errorLogger(error);
  }
})();

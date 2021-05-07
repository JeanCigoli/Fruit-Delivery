import Knex from 'knex';
import { DATABASE } from '../../../../utils/constants';

const knex = Knex({
  client: DATABASE.DB_DIALECT,
  connection: {
    host: DATABASE.DB_HOST,
    user: DATABASE.DB_USERNAME,
    password: DATABASE.DB_PASSWORD,
    database: DATABASE.DB_NAME,
  },
});

export default knex;

import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {schema} from '../dataBase/Schemas';
import {migrations} from '../dataBase/Migrations';

import Serie from '../dataBase/Tables/Serie';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'TVMaze',
});

const dataBase = new Database({
  adapter,
  modelClasses: [Serie],
});

export default dataBase;

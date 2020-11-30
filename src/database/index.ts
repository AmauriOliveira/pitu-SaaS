import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.MY_SQL_STRING!);

export default sequelize;

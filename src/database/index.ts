import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:amauri32@localhost:3306/pitu');

export default sequelize;

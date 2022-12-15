import * as dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));





dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'oracle',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
console.log('sequelize: ', sequelize);

try {
    await sequelize.authenticate();


    sequelize.getMigrator({
        path: __dirname + '/migrations',
        pattern: /\.js$/,
      });

    const Coisa = sequelize.define('PESSOAS', {
        ID: {
            type: DataTypes.INTEGER,  // maps to INTEGER
            autoIncrement: true,      // automatically increment the value
            primaryKey: true,         // this is the table's primary key
            allowNull: false,         // value cannot be null
        },
        NAME: {
            type: DataTypes.STRING,   // maps to VARCHAR2
            allowNull: false,         // value cannot be null
        },
        AGE: {
            type: DataTypes.INTEGER,  // maps to INTEGER
            allowNull: true,          // value can be null
        },
        HEIGHT: {
            type: DataTypes.DECIMAL,  // maps to NUMBER
            allowNull: true,          // value can be null
        }
    });

   
    const registros = await Coisa.findAll();
    console.log('registros: ', registros);

   



    sequelize.sync()
        .then(() => console.log('Tabela criada com sucesso.'))
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
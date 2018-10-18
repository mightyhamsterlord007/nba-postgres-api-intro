import Sequelize from 'sequelize';
import { gamesConfig } from './modelConfiguration';

const config = {
    timestamps: true, 
    underscored: true
}

const options = {
    dialect: 'postgres'
}

const connectionString = process.env.DATA_BASE_CONNECTON || 'postgres://localhost:5432/nba';

export const nbaDatabase = new Sequelize(connectionString, options);

export const gamesTable = nbaDatabase.define('games', gamesConfig, config);
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { ProjectModel } from './models/ProjectModel';
import { ConsortiumModel } from './models/ConsortiumModel';
import { MinuteModel } from './models/MinuteModel';
import { ConsortiumUserModel } from './models/ConsortiumUserModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'admin',
  models: [
    ConsortiumUserModel,
    ConsortiumModel,
    UserModel,
    ProjectModel,
    MinuteModel
  ],
  logging: false
  
});

export default sequelize;
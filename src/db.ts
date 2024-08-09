import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { ProjectModel } from './models/ProjectModel';
import { ConsortiumModel } from './models/ConsortiumModel';
import { MinuteModel } from './models/MinuteModel';
import { ConsortiumUserModel } from './models/ConsortiumUserModel';
import { AdvertisingModel } from './models/AdvertisingModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'foodoffer2',
  models: [
    ConsortiumUserModel,
    ConsortiumModel,
    UserModel,
    ProjectModel,
    MinuteModel,
    AdvertisingModel
  ],
  logging: false
  
});

export default sequelize;
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { WorkerModel } from './models/WorkerModel';
import { AppointmentModel } from './models/AppointmentModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'admin',
  models: [
    UserModel,
    WorkerModel,
    AppointmentModel
  ],
  logging: false
  
});

export default sequelize;
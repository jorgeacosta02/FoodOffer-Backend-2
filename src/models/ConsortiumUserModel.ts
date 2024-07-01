import {
    Model,
    Column,
    Table,
    ForeignKey,
    DataType,
  } from 'sequelize-typescript';
  import { ConsortiumModel } from './ConsortiumModel';
  import { UserModel } from './UserModel';
  
  @Table({ tableName: 'consortium_user' })
  export class ConsortiumUserModel extends Model {
    @ForeignKey(() => ConsortiumModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    consortiumId!: string;
  
    @ForeignKey(() => UserModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    userId!: string;
  }
  
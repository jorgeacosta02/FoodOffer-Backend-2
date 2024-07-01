// import {
//     Model,
//     Column,
//     Table,
//     PrimaryKey,
//     Default,
//     DataType,
//   } from 'sequelize-typescript';
  
//   @Table({ tableName: 'consortium' })
//   export class ConsortiumModel extends Model {
//     @PrimaryKey
//     @Default(DataType.UUIDV4)
//     @Column({
//       type: DataType.UUID,
//       defaultValue: DataType.UUIDV4,
//       allowNull: false,
//     })
//     id!: any;
  
//     @Column
//     name!: string;

//     @Column
//     address!: string;

//     @Column({
//       type: DataType.BOOLEAN,
//       allowNull: false,
//       defaultValue: true, // Valor por defecto para la columna 'active'
//     })
//     active!: boolean;
//   }
  


import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ConsortiumUserModel } from './ConsortiumUserModel';
import { UserModel } from './UserModel';

@Table({ tableName: 'consortium' })
export class ConsortiumModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column
  name!: string;

  @Column
  address!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active!: boolean;

  @BelongsToMany(() => UserModel, () => ConsortiumUserModel)
  users!: UserModel[];
}

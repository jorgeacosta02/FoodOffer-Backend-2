// import {
//   Model,
//   Column,
//   Table,
//   PrimaryKey,
//   Default,
//   DataType,
// } from 'sequelize-typescript';

// @Table({ tableName: 'users' })
// export class UserModel extends Model {
//   @PrimaryKey
//   @Default(DataType.UUIDV4)
//   @Column({
//     type: DataType.UUID,
//     defaultValue: DataType.UUIDV4,
//     allowNull: false,
//   })
//   id!: any;
  
//   @Column
//   firstName!: string;
  
//   @Column
//   lastName!: string;
  
//   @Column({
//     type: DataType.STRING, // Ajusta el tipo según lo que uses para DNI
//     allowNull: false,
//   })
//   dni!: string;

//   @Column
//   phone!: string;

//   @Column
//   email!: string;

//   @Column
//   plot!: string;

//   @Column
//   password!: string;
  
//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//     defaultValue: 'user', // Valor por defecto para la columna 'role'
//   })
//   role!: string;

//   @Column({
//     type: DataType.BOOLEAN,
//     allowNull: false,
//     defaultValue: true, // Valor por defecto para la columna 'active'
//   })
//   active!: boolean;
// }


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
import { ConsortiumModel } from './ConsortiumModel';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  consortium_Id!: string;

  @Column
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dni!: string;

  @Column
  phone!: string;

  @Column
  email!: string;

  @Column
  plot!: string;

  @Column
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'user',
  })
  role!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active!: boolean;

  @BelongsToMany(() => ConsortiumModel, () => ConsortiumUserModel)
  consortiums!: ConsortiumModel[];
}

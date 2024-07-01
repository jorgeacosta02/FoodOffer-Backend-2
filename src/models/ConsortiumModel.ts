import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { ConsortiumUserModel } from './ConsortiumUserModel';
import { UserModel } from './UserModel';
import { ProjectModel } from './ProjectModel';
import { MinuteModel } from './MinuteModel';

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

  @HasMany(() => ProjectModel)
  projects!: ProjectModel[];

  @HasMany(() => MinuteModel)
  minutes!: MinuteModel[];
}

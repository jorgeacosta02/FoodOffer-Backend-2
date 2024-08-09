import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';

@Table({ tableName: 'advertising' })
export class AdvertisingModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: any;

  @Column
  title!: string;
  
  @Column
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price!: string;

  @Column
  attributes!: string;

  @Column
  images!: string;

  @Column
  deleteDate!: string;
}

import {
    Model,
    Column,
    Table,
    PrimaryKey,
    Default,
    DataType,
  } from 'sequelize-typescript';
  
  @Table({ tableName: 'minute' })
  export class MinuteModel extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
    })
    id!: any;
  
    @Column
    date!: string;

    @Column
    title!: string;
 
    @Column
    text!: string;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Valor por defecto para la columna 'active'
    })
    active!: boolean;
  }
  
  
  
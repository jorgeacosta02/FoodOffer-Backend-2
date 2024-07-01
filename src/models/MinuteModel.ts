import {
    Model,
    Column,
    Table,
    PrimaryKey,
    Default,
    DataType,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { ConsortiumModel } from './ConsortiumModel';
  
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

    @ForeignKey(() => ConsortiumModel)
    @Column({
      type: DataType.UUID,
      allowNull: false,
    })
    consortiumId!: string;

    @BelongsTo(() => ConsortiumModel)
    consortium!: ConsortiumModel;

  }
  
  
  
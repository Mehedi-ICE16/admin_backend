import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { role } from './role.entity';
import { employee_login } from './employee_login.entity';
import { employee_stats } from './employee_stats.entity';

@Table({
  timestamps: false, // Disable timestamps
  freezeTableName: true, // Prevent table name changes
})
export class employee extends Model<employee> {
  @Column({
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  phone: string;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
  })
  active: boolean;

  @ForeignKey(() => role)
  @Column
  role_id: string;

  @BelongsTo(() => role)
  role: role;

  @HasOne(() => employee_login)
  login: employee_login;

  @HasMany(() => employee_stats)
  statusLogs: employee_stats[];
}

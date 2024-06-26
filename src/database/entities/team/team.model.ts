import { Column, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { department } from '../department/department.model';
import { role } from '../role/role.model';

@Table ({
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent table name changes
})
export class team extends Model<team> {
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
    })
    description: string;
    @ForeignKey(() => department)
    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    dept_id: string;
  
    @BelongsTo(() => department)
    department: department;
  
    @HasMany(() => role)
    roles: role[];
}
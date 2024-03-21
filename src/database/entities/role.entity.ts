import { Column, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { team } from './team.entity';
import { employee } from './employee.entity';

@Table ({
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent table name changes
})
export class role extends Model<role> {
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
    @ForeignKey(() => team)
    @Column
    team_id: string;
  
    @BelongsTo(() => team)
    team: team;
  
    @HasMany(() => employee)
    employees: employee[];
}   
import { DataTypes } from 'sequelize';
import { sequelize } from '../../connections';
import BaseModel from './BaseModel';
import { UserRole } from '.'; 

/**
 * Define UserDistributor Model
 * Thong tin tai khoan đăng nhập
 * 
 * @export
 * @class UserDistributor
 * @extends {BaseModel}
 */
export default class UserAccount extends BaseModel {

    static association() {
       
    }
}

/**
 * Attributes model
 */
const attributes = {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    pk_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    mobile: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: null
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 0
    },
    del: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        default: 0
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
};

/**
 * Options model
 */
const options = {
    tableName: 'user_account'
};

/**
 * Init Model
 */
UserAccount.init(attributes, { ...options, sequelize });
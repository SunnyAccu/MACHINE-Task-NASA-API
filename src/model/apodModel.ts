import { DataTypes, Model } from 'sequelize';
import {sequelize} from './../db/config';

const Apod = sequelize.define('Apod', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  explanation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Apod;


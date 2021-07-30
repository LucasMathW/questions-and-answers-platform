import Sequelize from 'sequelize'
import connection from './connection'

export default question = connection.define('question', {
  title : {
    type: Sequelize.STRING,
    allowNull : false
  },

  description : {
    type: Sequelize.TEXT,
    allowNull: false
  }
})
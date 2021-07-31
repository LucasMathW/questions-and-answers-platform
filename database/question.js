import Sequelize from 'sequelize'
import connection from './connection.js'

const  Question = connection.define('questions', {
  title : {
    type: Sequelize.STRING,
    allowNull : false
  },
  description : {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Question.sync({force: false}).then(()=>{})

export default Question;
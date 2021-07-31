import Sequelize from 'sequelize'
import connection from './connection.js'

const Answer = connection.define('answer',{
  answerBody: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Answer.sync({force : false}).then(()=>{});

export default Answer
import Sequilize from 'sequelize';

const connection = new Sequilize('questionsguides', 'root', 'R00tP@ssw04d', {
  host: 'localhost',
  dialect : 'mariadb'
});

export default connection
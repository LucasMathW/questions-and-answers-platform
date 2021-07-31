import express from 'express'
const app = express();
import connection from '../database/connection.js';
import Question from '../database/question.js';
import Answer from '../database/answer.js'

connection.authenticate()
  .then(() =>  {
    console.log('Connection to the database made successfully!!')
  })
  .catch((error)=>{
    console.error(error)
  })

const PORT = 3333;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (request, response) => {
  Question.findAll({ raw : true, order: [ 'id', 'title' ]})
  .then((questions) => {
    response.render("index", { questions: questions })
  })
})

app.get('/question/:id', (request, response) => {
  const id = request.params.id
  Question.findOne({ where : { id : id }}).then(question => {

     if(question !== undefined){
       Answer.findAll({
         where : {  questionId : question.id  },
         order: [
           ['id']
          ]
       }).then((answers) => {
         response.render("question", {
           question: question,
           answers: answers
         })
       })

     }else{
       response.redirect('/')
     }
  })
})

app.get('/to-ask', (request, response)=>{
  response.render('to-ask')
})

app.post('/save-question', (request, response)=>{
  const title = request.body.title
  const description = request.body.description
  console.log('title', title);
  console.log('description', description);

  Question.create({
    title : title,
    description : description
  }).then(() => {
    response.redirect('/')
  })
})

app.post('/answer', (request, response)=>{
  const questionId = request.body.question
  const answerBody = request.body.answer_body
  console.log('answerBody:', answerBody)
  Answer.create({
    answerBody : answerBody,
    questionId : questionId
  }).then(()=>{
    response.redirect('/question/'+questionId )
  })
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
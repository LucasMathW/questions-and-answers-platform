import express from 'express'
const app = express();
const PORT = 3333;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/to-ask', (request, response)=>{
  response.render('to-ask')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
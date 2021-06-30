import express from 'express'
const app = express();
const PORT = 3333;
app.set('view engine', 'ejs') 

app.get('/:nome/:lang', (request, response)=>{
  var nome = request.params.nome
  var lang = request.params.lang
  var msgError = false
  response.render('index', {
    nome: nome,
    lang: lang,
    empresa: 'Alencar LTDA',
    msg: msgError
  })
})

app.listen(PORT, ()=>{
  console.log(`Server running on  ${PORT}`)
})
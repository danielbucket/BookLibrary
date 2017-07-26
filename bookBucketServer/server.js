const md5 = require('md5')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('express-cors')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../backEnd/knexfile')[environment]
const db = require('knex')(configuration)


// var bookshelf = require('bookshelf')(knex);


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors({
  allowedOrigins: ['localhost:3000', 'localhost:3001']
}))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'User BucketLibrary Server'
app.locals.users = {}
app.locals.library = {}




// users
app.get('/bucketLibrary/v1/users', (request, response) => {

  db('users').select()
  .then(data => response.status(200).json({data}))
  .catch(error => response.status(500).json({error}))
})

app.delete('/bucketLibrary/v1/users', (request, response) => {
// checks out
  db('users').where({id: request.body.id}).del()
  .then(data => response.status(200).json({data}))
  .catch(error => response.status(500).json({error}))
})


// app.get('/api/users/:id', (request, response) => {
//   const { id } = request.params
//   const message = app.locals.users[id]
//
//   if (!message) { return response.sendStatus(404)  }
//
//   response.status(200).json({ id, message })
// })

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})

app.post('/bucketLibrary/v1/users', (request, response) => {
// checks out
  db('users').insert(request.body, ['username', 'email'])
  .then(data => response.status(200).json({ data }))
  .catch(error => response.status(500).json({ error }))
})


// library

app.get('/bucketLibrary/v1/library', (request, response) => {
// checks out
  db('library').select()
  .then(data => response.status(200).json({ data }))
  .catch(error => response.status(500).json({ error }))
})

app.get('/bucketLibrary/v1/users', (request, response) => {

  db.join("users", "email", "=", "id").select("id")
  .then(data => response.status(200).json({ data }))
  .then(data => console.log(data))
  .catch(error => response.status(500).json({ error }))
  })




//

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

app.set('port', process.env.PORT || 4400)
app.locals.title = 'User BucketLibrary Server'
app.locals.users = {}
app.locals.library = {}




// users get all users from user database
app.get('/bucketLibrary/v1/users', (request, response) => {
  // checks out
  db('users').select()
  .then(data => response.status(200).json({data}))
  .catch(error => response.status(500).json({error}))
})

//delete user from user database
app.delete('/bucketLibrary/v1/users', (request, response) => {
// checks out
  db('users').where({id: request.body.id}).del()
  .then(data => response.status(200).json({data}))
  .catch(error => response.status(500).json({error}))
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})

// create new user in user database
app.post('/bucketLibrary/v1/createuser', (request, response) => {
// checks out
  db('users').insert(request.body, ['username', 'email', 'id'])
  .then(user => response.status(200).json({ user: user[0] }))
  .catch(error => response.status(500).json({ error }))
})


// get all items from library database
app.get('/bucketLibrary/v1/library', (request, response) => {
// checks out
  db('library').select()
  .then(data => response.status(200).json({ data }))
  .catch(error => response.status(500).json({ error }))
})

// login / verify entered user data exists in database
app.post('/bucketLibrary/v1/getuser', (request, response) => {
  //checks out
  db('users')
  .where({email: request.body.email, password: request.body.password})
  .select('id', 'email', 'username')
  .then(user => response.status(200).json({ user: user[0]}))
  .catch(error => response.status(500).json({ error }))
  })


// retrieve all books from library database that satisfy
// the value of request.body
app.post('/bucketLibrary/v1/user/library', (request,response) => {
  // checks out
  db('library').where(request.body)
    .select()
    .then(data => response.status(200).json({data}))
    .catch(error => response.status(500).json({error}))
})

// add new user specific book to library database
app.post('/bucketLibrary/v1/user/library/new', (request, response) => {
  // checks out
  db('library').insert(request.body, ['*'])
  .then(data => response.status(200).json({data}))
  .catch(error => response.status(500).json({error}))
})

//

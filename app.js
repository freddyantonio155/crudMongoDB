const express = require('express')
const app = express()
const alumnosRouter = require('./src/routes/alumnos')
const db = require('./db')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))
app.set('views', __dirname + '/src/views')

const alumnos = require('./src/routes/alumnos')
app.use(alumnosRouter)

app.listen(3020, ()=>{
  console.log('¡Server UP! en http://localhost:3020')
})
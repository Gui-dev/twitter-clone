import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import http from 'http'
import socketIO from 'socket.io'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3333
const server = http.Server( app )
const io = socketIO( server )


mongoose.connect( 
  'mongodb+srv://gui:gui@cluster0-jwl9j.mongodb.net/goweek-backend?retryWrites=true',
  { useNewUrlParser: true } 
)

app.use( cors() )
app.use( ( req, res, next ) => {
  req.io = io
  return next()
} )

app.use( express.json() )
app.use( routes )

server.listen( port, () => {
  console.log( `Servidor rodando na porta ${port}` )
} )


//node server/server.js is the  node server

const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT || 3000//port from heroku or 3000 static

app.use(express.static(publicPath))

app.get('*',(req, res) => {
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port,() => {
    console.log('server is up')
})
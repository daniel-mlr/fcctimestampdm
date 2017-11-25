const express = require('express')
// const path = require('path')
const PORT = process.env.PORT || 5000

express()
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile(process.cwd() + '/index.html'))
  // .get('/cool', function (request, response){
  //     response.send(cool())
  // })
  .listen(PORT, () => console.log(`Node app is running  on ${ PORT }`))

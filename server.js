const express = require('express')
const routes = require('./app/routes/index.js')
const PORT = process.env.PORT || 5000


var app = express()
routes(app);

// express()
  // .get('/', (req, res) => res.sendFile(process.cwd() + '/public/index.html'))
  // .get('/:date', function(req, res) {
  //     var d = new Date(req.params.date);
  //     res.send('request params:' + d.toDateString())
  // })
app.listen(PORT, () => console.log(`Node app is running  on ${ PORT }`))

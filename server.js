const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.sendFile(process.cwd() + '/index.html'))
  .get('/:date', function(req, res) {
      var d = new Date(req.params.date);
      res.send('request params:' + d.toDateString())
  })
  .listen(PORT, () => console.log(`Node app is running  on ${ PORT }`))

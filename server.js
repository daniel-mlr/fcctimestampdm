const express = require('express')
const routes = require('./app/routes/index.js')
const PORT = process.env.PORT || 5000


var app = express();
app.use('/public', express.static(process.cwd() + '/public'))

routes(app);

app.listen(PORT, () => console.log(`Node app is running  on ${ PORT }`))

// 'use strict'

module.exports = function(app) {
    app.route('/').get( function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    } )
    app.route('/:date').get( function(req, res) {
        var d = new Date(req.params.date);
        res.send('date saisie: ' + d.toDateString())
    })
    app.route('/:field1/:field2/:field3').get( function(req, res) {
        res.send('un: ' + req.params.field1 + 
                ', deux: ' +req.params.field2 +
                ', trois: ' +req.params.field3 
                )
    })
}

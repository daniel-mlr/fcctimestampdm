// 'use strict'

mess = function(datestr) {
    var d = new Date(datestr);
    return 'date saisie: ' + d.toDateString();
}


module.exports = function(app) {
    app.route('/').get( function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    } )
    app.route('/:date').get( function(req, res) {
        // var d = new Date(req.params.date);
        // res.send('date saisie: ' + d.toDateString())
        res.send(mess(req.params.date))
    })
    app.route('/:f1/:f2/:f3').get( function(req, res) {
        // var d = new Date(req.params.f1 + ' ' + req.params.f2 + ' ' + req.params.f3);
        // res.send('date saisie avec slashes: ' + d.toDateString())
        res.send(mess(req.params.f1 + ' ' + req.params.f2 + ' ' + req.params.f3))


    })
}

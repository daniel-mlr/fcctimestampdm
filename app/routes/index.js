// 'use strict'

module.exports = function(app) {
    app.route('/').get( function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html', function(err) {
            if (err) {
                console.log(err);
                res.status(err.status).end()
            }
        });
    } )
    app.route('/:date').get( function(req, res) {
        res.json(mess(req.params.date))
    })
    app.route('/:f1/:f2/:f3').get( function(req, res) {
        res.json(mess(req.params.f1 + ' ' + req.params.f2 + ' ' + req.params.f3))
    })
    
    var mess = function(datestr) {
        if (/^\d+$/.test(datestr)) {
            datestr = parseInt(datestr)
        }

        var d = new Date(datestr)

            if (d == 'Invalid Date') {
                return {'unix': null, 'natural': null}
            } else {
                return {'unix': d.valueOf(), 'natural': d.toDateString()};
            }
    }

}

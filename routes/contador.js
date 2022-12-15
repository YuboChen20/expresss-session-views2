let express = require('express')
let router = express.Router();

// Access the session as req.session
router.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.render('contador', {'views':req.session.views, 'seconds':req.session.cookie.maxAge / 1000})
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})

module.exports = router;
const session = require('express-session')
const express = require("express");
const app = express()
const path = require("path")
// enable POST
app.use(express.urlencoded({extended: true}))

// enable static
app.use(express.static(path.join(__dirname, 'public')))

// use templates
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 4000;

let indexRouter = require('./routes/contador.js')

const sess = {
    secret: 'ausazko hitz multzoa',
    cookie: {maxAge: 1000*20},
    resave: true,
    saveUninitialized: true
}

app.use(session(sess))

// Access the session as req.session
// Access the session as req.session
app.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.render('index',{views:  req.session.views,seconds: req.session.cookie.maxAge / 1000})
    } else {
        req.session.views = 1
        res.render('index2',{Result:'welcome to the session demo. refresh!'})
    }
})
app.use('/', indexRouter);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

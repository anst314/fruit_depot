const express = require('express')
const fruits = require('./models/fruits')
const app = express()
const PORT = 3000

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// ===== Middleware
// Setting a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send('<h1>Hello</h1>')
})
app.get('/fruits', (req, res) =>{
    //res.send(fruits)
    res.render('Index', {fruits: fruits})
})
app.post('/fruits', (req, res)=>{
    console.log(req.body);
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;       
} else {
    req.body.readyToEat = false;
}
    fruits.push(req.body)
    res.redirect('/fruits')
})
app.get('/fruits/new', (req, res)=>{
    res.render('New')
})
app.get('/fruits/:indexOfFruitArray', (req, res) =>{
    console.log(req.params)
    // res.send(fruits[req.params.indexOfFruitArray])
    res.render('Show', {fruit: fruits[req.params.indexOfFruitArray]})
})

// If non of the routes matches the request show 404 pg
app.get('*', (req, res) => {
    //res.redirect('/fruits')
    res.render('404')
})
app.listen(3000, () => {
    console.log(`Server running on port: ${PORT}`);
})




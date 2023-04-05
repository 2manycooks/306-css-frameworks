// bring in express via the request keyword like any module
const express = require('express')

// create our instance of express via invocation
const app = express()
app.set('view engine', 'ejs')

// optional, but common to abstract out your port into its own all caps variable
let PORT = 8000

// set up a basic GET route to make sure things are working
app.get('/', (req, res) => {
    res.render('home')
})

// also check to make sure your port is available to be listened on
app.listen(PORT, () => {
    console.log(`You are listening to 200 CODE FM, all the hits from port ${PORT}, all day.`)
})
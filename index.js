const express = require("express")
    
    const app = express()

    //routes
    app.get('/', (req, res) => {
        res.send(`Hello NODE API`)
    })

    app.get('/blog', (req, res) => {
        res.send(`Hello Blog, My name is Philbert. I am learning Node.js`)
    })
    
    app.listen(3000, () => {
        console.log("Server has started!")
    })
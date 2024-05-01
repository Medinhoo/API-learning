const express = require('express')
const app = express()
const mongoose = require('mongoose');
const uri = "mongodb+srv://chihimed:sFhugK3DNkLRVr5N@api-test.8o7qski.mongodb.net/API-test?retryWrites=true&w=majority&appName=API-TEST";
const productRoute = require('./routes/product.route')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
 
mongoose.connect(uri).then(()=>{
    console.log('connected to database')
    app.listen(3000, () => {
        console.log('the server is running')
    })
}).catch(()=> {
    console('connection failed')
})

//routes
app.use('/products', productRoute)


app.get('/', (req, res) => {
    res.send("Hello from the API server updated")
}) 
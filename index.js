console.log('In this lecture i will be learning about Express and NodeJs')

const express = require('express');
const app = express();
// const bodyParser = require('body-parser')

const   PORT =  3000;

app.use(express.json())
// app.use(bodyParser.json())

app.listen(PORT, ()=>{
    console.log(`Your app is live on PORT : ${PORT}`)
})

app.get('/', (req, res)=>{
    res.status(200).send('First express data')
})

app.get('/object', (req, res)=>{
    res.status(200).send({
        name : 'Avinash Kumar Singh',
        age : 21,
        book : 'Atomic Habits'
    })
})

app.get('/html', function(res, res){
    res.status(200).send(`<h1>This is a sample html text in H1</h1>`)
})

// Accessing headers

app.post('/conversation', (req, res)=>{
    let auth_num = req.headers.authorization;  // this is how we can access headers
    console.log(auth_num)
    res.send('This is a post request')
})

// Accessing body (We can not access body directly, we need some middleware like body-parser)

app.post('/body', (req, res)=>{
    const msg = req.body.msg;
    console.log(msg)
    const data = req.body;
    res.json(data)
})

// Accessig query-params

app.get('/query', function(req, res){
    const msg1 = req.query.msg1
    const msg2 = req.query.msg2
    console.log(msg1, "  ", msg2)
    res.send('<b>I got your query params</b>')
})
require('dotenv').config()
const {db}=require('./db/db')
const express=require('express')
const cors=require('cors')

const {readdirSync}=require('fs')

const app=express()

const PORT=process.env.PORT

const allowedOrigin = 'https://moneymate.lovelgeorge.com';

const corsOptions = {
  origin: allowedOrigin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies or authentication headers
};


//middlewares
app.use(express.json())
app.use(cors(corsOptions));


// routes
readdirSync('./routes').map((route) => app.use('/api/',require('./routes/'+ route))) 

app.get('/',(req,res)=>{
    res.send('Hello')
})

const server =() => {
    db()
    app.listen(PORT,()=>{
        console.log("Listening")
    })
    console.log("PORT")
}
server()
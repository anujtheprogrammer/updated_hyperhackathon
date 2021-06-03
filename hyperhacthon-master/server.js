const express = require('express');
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({extended : false}));

app.get('/',(req,res)=>{
    res.send("api running sucessfuly");
});

app.use('/api/learner',require('./routes/api/learner'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/addproject',require('./routes/api/addproject'));
app.use('/api/addpost',require('./routes/api/addpost'));
app.use('/api/mentor',require('./routes/api/mentor'));
app.use('/api/mentorauth',require('./routes/api/mentorauth'));

const port = 5000 || process.env.PORT ;

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

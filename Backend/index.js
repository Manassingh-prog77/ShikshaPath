const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/study',require('./routes/StudyMaterial') );
app.use('/api/marks',require('./routes/Score'));
app.use('/api/practise',require('./routes/PractiseQuiz'))
app.use('/api/syllb',require('./routes/Syllb'));


app.listen(port, () => {
  console.log(`ShikshaPath backend listening at https://localhost:${port}`)
})
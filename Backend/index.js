let express = require('express');
let cors = require('cors');
let db = require('./db');
let student = require('./models/Students')
const PORT = 3001;

let app = express();

app.use(cors());
app.use(express.json())


app.get('/api/getmessage', (req, res) => {
    res.json({
        "status": true,
        "data": "Hello World",
        "message": "OKAY"
    })
})

app.get('/getuser', async (req, res) => {
    let resp = await student.find({ id: 1 });
    console.log(resp);
})


app.listen(PORT, () => console.log('Server is running on ' + PORT))
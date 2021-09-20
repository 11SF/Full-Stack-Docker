let express = require('express');
let cors = require('cors');
const PORT = 3001;

let app = express();

app.use(cors());

app.get('/api/getmessage', (req,res) => {
    res.json({
        "status" : true,
        "data" : "Hello World"
    })
})

// app.get('/getuser')


app.listen(PORT, () => console.log('Server is running on ' + PORT))
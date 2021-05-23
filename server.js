const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORt || 5500
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: /http:\/\/localhost/
}));
 app.options('*', cors())
app.listen(port, () => {
    console.log(`server online sur le ${port}`)

})
 
 
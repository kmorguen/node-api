const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORt || 5500
const bodyParser = require('body-parser')
const package = require('./package.json')
const apiRoot = '/api';

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: /http:\/\/localhost/
}));
 app.options('*', cors())

//configure routes
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`${package.name} -v ${package.version}`);
})

//Mock
const db = {
    toto:{
        user: 'toto',
        currrency: 'USD',
        balance: 500,
        transaction: []
    }
}

router.get('/accounts.user', (req, res) =>{
    const user = req.params.user;
    const account = db[user];

    if(!account){
        return res
        .status(404)
        .json({ error: 'User does not exist'});
    }

    return res.json(account)
})

//register routes
app.use(apiRoot, router);

app.listen(port, () => {
    console.log(`server online sur le ${port}`)

})
 
 
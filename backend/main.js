import express from "express"
import path from "path"
import cors from "cors"
import bodyParser from "body-parser";
import fetch from "node-fetch"

const app = express();
// const port = 3000;

// app.use(cors());

app.use(cors({
    origin: "https://ip-tracker-topaz.vercel.app",
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

var data;
const fetchData = async (ipAddress) => {
    // let userIP = await axios.get("https://api.ipify.org?format=json");
    // console.log("User IP:", userIP.data);
    let url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_K8ummtQMmIWJok5xIPn4rJqwJMeB9&ipAddress=" + ipAddress;
    let api = await fetch(url);
    let r = await api.json();
    data = r;
    console.log(data);
    return data;
}

app.get("/", async (req, res) => {
    console.log(req.query.data)
    // let url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_K8ummtQMmIWJok5xIPn4rJqwJMeB9&ipAddress=" + toString(req.query.data);
    // let api = await fetch(url);
    // let r = await api.json();
    // data = r;

    // data = "https://geo.ipify.org/api/v2/country,city?apiKey=at_K8ummtQMmIWJok5xIPn4rJqwJMeB9&ipAddress=" + `${req.query.data}`;
    console.log(data)
    res.json(data);
})

app.post("/", async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
    console.log(req.body.userIP);
    let ipAddress = req.body.userIP;
    let ipDetails = await fetchData(ipAddress);
    res.json(ipDetails);
})

// app.listen(port, () => {
//     console.log(`Examplar app running at ${port}`);
// })

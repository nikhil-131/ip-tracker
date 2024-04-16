import express from "express"
import path from "path"
import cors from "cors"
import bodyParser from "body-parser";
import fetch from "node-fetch"

const app = express();
// const port = 3000;

// app.use(cors());

app.use(cors(
    {
        origin: ["https://ip-address-tracker-backend.vercel.app/"],
        methods: ["GET", "POST"]
    }
));

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
    console.log(req.body.userIP);
    let ipAddress = req.body.userIP;
    let ipDetails = await fetchData(ipAddress);
    res.json(ipDetails);
})

// app.listen(port, () => {
//     console.log(`Examplar app running at ${port}`);
// })

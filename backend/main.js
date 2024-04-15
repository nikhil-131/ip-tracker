import express from "express"
import path from "path"
import cors from "cors"
import bodyParser from "body-parser";
import fetch from "node-fetch"

const app = express();
const port = 3000;

// app.use(cors());

// app.use(cors(
//     {
//         origin: ["https://ip-address-tracker-backend.vercel.app/"],
//         methods: ["GET", "POST"]
//     }
// ));

app.use(bodyParser.json());

var data;
// const fetchData = async () => {
//     let api = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_u9ZnWhe2bJYyc8piTVt897VBMFoPM&ipAddress=8.8.8.8");
//     let r = await api.json();
//     data = r;
//     console.log(data);
// }
// fetchData().then(() => {
// });

app.get("/", async (req, res) => {
    console.log(req.query.data)
    let api = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_K8ummtQMmIWJok5xIPn4rJqwJMeB9&ipAddress=${req.query.data}`);
    let r = await api.json();
    data = r;
    console.log(data)
    res.json(data);
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: "Data received successfully!" });
})

app.listen(port, () => {
    console.log(`Examplar app running at ${port}`);
})
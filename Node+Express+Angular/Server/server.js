express = require("express");
cors = require("cors");
eobj = express();
port = 8000;

//////////////////////////////////////////////////
// Handling CORS

// eobj.use(cors({
//     origin: "http://localhost:4200",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
// }));

eobj.use(cors());

//////////////////////////////////////////////////

function MarvellousWelcome()
{
    console.log("Marvellous Server is ON...");
}
eobj.listen(port,MarvellousWelcome);

//////////////////////////////////////////////////

function MarvellousGet(req,res)
{
    res.send("Marvellous Server is Running");
}
eobj.get('/',MarvellousGet);

//////////////////////////////////////////////////

function MarvellousGetBatches(req,res)
{
    res.json({
        "Batch" : "PPA",
        "Fees" : 21000,
        "Duration" : "3 Months"
    });
}
eobj.get('/getBatches',MarvellousGetBatches);
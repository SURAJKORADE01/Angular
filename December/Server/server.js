// express hai baherun load kela 
express = require("express");

eobj = express();

port = 5200;

function ListenServer()
{
    console.log("Marvellous Server is in listening mode.")
}

eobj.listen(port,ListenServer);

function ConnectRoute(req,res)
{
    res.send("Marvellous Server is ON...");
}

eobj.get('/',ConnectRoute)          // -> / route aahe 
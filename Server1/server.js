// require keyword is used to load outside package

// require is like
// c -> #include
// c++ -> using namespace
// java, tyepscript -> import

// express = -> keyword/variable
// require -> load from outside
// "express" -> load this
express = require("express");   // express la load kela

// express cha object create kela 
eobj = express();      

// server ha 5100 port number la active aasel -> port -> application hai internet la connect karnyasathi port number dila jato
port = 5100;        

// function automatically call hoil whenever server is start 
function MarvellousWelcomeMessage() 
{
    console.log("Marvellous Server is ON at port 5100...");
}

// Server ni cilent chi request aikanyasathi -> listen method -> 2 parameter -> port number , message want to display
eobj.listen(port,MarvellousWelcomeMessage);     // listen -> when we start/run the server -> listen method call hote

function MarvellousAcceptRequest(req,res)
{
    res.send("Marvellous Server Connection is Successful...");
}

eobj.get('/',MarvellousAcceptRequest);      // Client want to connect with server browser 

function MarvellousBatches(req,res)
{
    res.send("We have PPA, Angular, Python, LB");
}

eobj.get('/Batches',MarvellousBatches);

                           // req -> name can change
function MarvellousLocation(req,res)
{
    res.send("Location of Marvellous is : Kothrud Pune");
}

eobj.get('/Location',MarvellousLocation);

function MarvellousInfoBatchDetails(req,res)
{
    res.json({
        "Name" : "Marvellous Infosystems",
        "Batch" : "PPA",
        "Duration" : "3 Months",
        "Fees" : 21000
    })
}

eobj.get('/Getbatchdetails',MarvellousInfoBatchDetails);
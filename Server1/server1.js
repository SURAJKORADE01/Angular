express = require("express");

eobj = express();      

// Inline function definition
eobj.listen(5100,function MarvellousWelcomeMessage()
{
    console.log("Marvellous Server is ON at port 5100...");
});
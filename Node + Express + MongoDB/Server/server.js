// Hya project madhe Node + Express use nahi kela karan
// 1) Hai Client sobat connect nahi honaar -> tya mule listen, get hya method nahi lihilya aani connect cha object pn nahi create kela

// MongoDB service cha use karun database sobat connect karnyasathi ha code use karto

// MongoDB is server -> Node+Express ha ithe client aahe -> tyala connect karaycha aahe MongoDB shi -> connection sathi use kela MongoClient class cha object
// npm install mongodb -> Install kelyamula MongoDB cha client aala

const { MongoClient } = require("mongodb"); // client module of mongodb
const URL = "mongodb://localhost:27017";    // mongodb url -> 27017 by default port number aahe
const client = new MongoClient(URL);            // client -> MongoClient class cha object create kela 


// normal function la aapn call karto -> te function value return karta -> next execution start hota 

// async -> yeil tevv dya -> waiting stage -> function call immediately but it is not able to return the value immediately because of asnchronous call
// Database sobat connect karnyasathi aapn hai function use karto

// this method return promise
async function GetConnection()  // -> baher janaar i.e. database kade
{
    // server la database la connect karta lagnarya steps
    let result = await client.connect();        // connect hi MongoClient chi method aahe -> connect kr URL la -> return value catch keli result madhe
    let db = result.db("Marvellous");          // db -> database
    return db.collection("Batches");        // collection madhun data return kr 
} 

async function ReadData()       // Read the data from database
{
    let data = await GetConnection();  // MongoDB sobat connent karnya sathi use GetConnection
    data = await data.find().toArray();   // find() read data from database -> select * from student; -> json return karel -> Alela data Array amdhe convert kr
    console.log("Data retrived from database : ");
    console.log(data); 
}

async function InsertData()     // Insert data 
{
    let data = await GetConnection();
    let result = await data.insertOne({    // insertOne -> at a time one insert honya sathi
        "Name" : "Python", "Fees" : "22000", "Duration" : "2.5 Months"
    });

    if(result.acknowledged)
    {
        console.log("Data is inserted successfully.");
    }
}

async function DeleteData()     // delete
{
    let data = await GetConnection();
    let result = await data.deleteOne({"Name" : "Python"});

    if(result.acknowledged)
    {
        console.log("Data deleted successfully.");
    }
}

async function UpdateData()     // delete
{
    let data = await GetConnection();
    let result = await data.updateOne({"Name" : "LB"}, {$set : {"Fees" : "25000"}});

    if(result.acknowledged)
    {
        console.log("Data updated successfully.");
    }
}

function main()     // like entry point function 
{
    // let -> local variable -> Fakt JS madhe aahe 

    var ret;    // return value accept karnyasathi

    ret = GetConnection();  // User-Defined funtion call -> GetConnection() chi return value ret madhe yenar

    console.log(ret);
    console.log("Database connection is successful");   // hai just rederence satgi print kela -> print zala manje database sobat connection zala aasa NAHI

    // ReadData();      // R
    // InsertData();    // C
    // DeleteData();    // D
    // UpdateData();    // U
}

main()  // function call -> OS call karte -> It is way of writing the code -> first execution line

// CURD -> Create, Update, Read , Delete -> Operation Perfom Karayache
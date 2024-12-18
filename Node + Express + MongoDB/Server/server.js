// MongoDB service cha use karun database sobat connect karnyasathi hi file use karto

// MongoDB is server -> Node+Express ha ithe client aahe -> tyala connect karaycha aahe MongoDB shi -> connection sathi use kela MongoClient class cha object
// npm install mongodb -> Install kelyamula MongoDB cha client aala

const { MongoClient } = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);            // client -> MongoClient cha object create kela 


// normal function la aapn call karto -> te function value return karta -> next execution start hota 

// async -> yeil tevv dya -> waiting stage -> function call immediately but it is not able to return the value immediately because of asnchronous call
// Database sobat connect karnyasathi aapn hai function use karto
async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
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
    // let -> local variable
    var ret;

    ret = GetConnection();  // User-Defined funtion call

    console.log(ret);
    console.log("Database connection is successful");

    // ReadData();
    // InsertData();
    // DeleteData();
    // UpdateData();
}

main()  // function call -> OS call karte

// CURD -> Create Update, Read , Delete -> Operation Perfom Karayache
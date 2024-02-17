const {MongoClient}=require("mongodb");
const URL="mongodb://localhost:27017";
const client=new MongoClient(URL);
const { ObjectId } = require('mongodb');

express=require('express');
eobj=express();
port=8500;


function Starter(){
    console.log("Marvellous serever is in listening mode at : "+port);   
}

eobj.listen(port,Starter);

function MarvellousGet(req,res){
    res.send("Marvellous Server started...");
}

eobj.get('/',MarvellousGet);

async function GetConnection(){
    let result=await client.connect();
    let db=result.db("AniketUgale");
    return db.collection("Batches");
}

async function ReadData(req,res){
    console.log("Read successfully...");
    let data=await GetConnection();
    data=await data.find().toArray();
    res.send(data);
}

eobj.get('/getBatches',ReadData);//api endpoint


async function WriteData(req, res) {
    const { name, fees, duration } = req.query;
    console.log("Data successfully received:","name : ",name,", fees : ",fees," ,Duration : ",duration);
    let data = await GetConnection();
    const result = await data.insertOne({ name,fees, duration });
    if(result.acknowledged){
        console.log("Data gets succesfully inserted");
    }
}

eobj.get('/writedata', WriteData) //;api endpoint




async function DeleteData(req,res){
    const dataTODelete=req.query.data;
    console.log("Data delete from id : ",dataTODelete);
    let data = await GetConnection();
    const objectId = new ObjectId(dataTODelete);
    let result = await data.deleteOne({ _id: objectId });
    if(result.acknowledged)
    {
        console.log("Data gets deleted successfully");
    }

}

eobj.get('/deletedata',DeleteData); //api endpoint


async function UpdateData(req,res){
    const {id,name,fees,duration}=req.query;
    console.log("Data successfully Updated where id = :",id,"Update = ","name : ",name,", fees : ",fees," ,Duration : ",duration);
    let data = await GetConnection();
    const objectId = new ObjectId(id);
    let result =await data.updateOne({_id:objectId},{$set:{name:name,fees:fees,duration:duration}});
    if(result.acknowledged){
        console.log("Data gets updated succesfully");
    }
}

eobj.get('/updatedata',UpdateData);
//CRUD
const { MongoClient, ServerApiVersion } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://rodri:PONE_LA_PASSWORD_@taskManagerAppCluster.59y2zhe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const db = client.db("taskManagerAppDB");
const taskCollection = db.collection("tasks");

async function main() {
    client.connect(err => {
        if(err){
            return console.log("unable to connect to database");
        }
        const insertResult = taskCollection.insertMany([{ id: 4, name: "lavar path" }, { id: 5, name: "lavar auto" }, { id: 6, name: "lavar terraza" }]);
        insertResult.then((onFullfilled, onRejected)=>{
            if(onFullfilled.acknowledged){
                console.log('inserted items ' + onFullfilled.insertedCount);
                console.log('inserted items ' + onFullfilled.insertedIds);
            } 
        });
        return 'done.';
    });

}

async function main2() {
    client.connect(err => {
        if(err){
            return console.log("unable to connect to database");
        }
        const insertResult = taskCollection.insertOne({ id: 7, name: "lavar banio" });
        insertResult
            .then(onFullfilled => {
            if(onFullfilled.acknowledged){
                console.log('inserted item ' + JSON.stringify(onFullfilled));
                console.log('id of inserted item ' + onFullfilled.insertedId);
            }
        });
        return 'done.';
    });

}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


  main2()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
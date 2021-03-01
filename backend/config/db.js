const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://cinema:root@spellcluster.tnmib.mongodb.net/test?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        console.log(`closed`);
        await client.close();
    }
}
run().catch(console.dir);

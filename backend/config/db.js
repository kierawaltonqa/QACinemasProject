const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://cinema:root@spellcluster.tnmib.mongodb.net/test";

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

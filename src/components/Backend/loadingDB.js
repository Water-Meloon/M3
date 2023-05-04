const fs = require('fs');
const { MongoClient, ObjectId } = require('mongodb'); // Import ObjectId
const uri = "mongodb+srv://WaterMelon:Cyber2019@milestone3.pv6y8yo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const loadDB = async () => {
  try {
    await client.connect();

    const fileContent = fs.readFileSync('src/components/Backend/milestone3_createDB.txt', 'utf-8');
    const commands = fileContent.split('\n').filter(cmd => cmd.trim() !== '');

    for (const command of commands) {
      const [operation, collectionName, data] = command.split('|');
      const db = client.db("Test");
      const collection = db.collection(collectionName);

      if (operation === 'CREATE') {
      } else if (operation === 'INSERT') {
        const parsedData = JSON.parse(data);
        parsedData._id = new ObjectId(parsedData._id);
        await collection.insertOne(parsedData);
      } else if (operation === 'DELETE') {
        await collection.deleteMany({});
      }
    }
  } catch (error) {
    console.error('Error loading DB:', error);
  } finally {
    await client.close();
  }
};

module.exports = loadDB;

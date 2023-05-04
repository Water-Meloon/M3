const fs = require('fs');
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://WaterMelon:Cyber2019@milestone3.pv6y8yo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const loadDB = async (userId) => {
  try {
    await client.connect();

    const fileContent = fs.readFileSync('src/components/Backend/milestone3_createDB.txt', 'utf-8');
    const commands = fileContent.split('\n').filter(cmd => cmd.trim() !== '');

    const db = client.db("Test");

    for (const command of commands) {
      const [operation, collectionName, data] = command.split('|');
      const collection = db.collection(collectionName);

      if (operation === 'CREATE') {
      } else if (operation === 'INSERT') {
        const parsedData = JSON.parse(data);

        if (parsedData.userId === userId) {
          const taskId = new ObjectId(parsedData._id);

          const existingTask = await collection.findOne({ _id: taskId });

          if (!existingTask) {
            parsedData._id = taskId;
            await collection.insertOne(parsedData);
          }
        }
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

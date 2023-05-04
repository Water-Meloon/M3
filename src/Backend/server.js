const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const loadDB = require('./loadingDB');


app.use(express.json());
app.use(cors());

const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://WaterMelon:Cyber2019@milestone3.pv6y8yo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect((err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

app.get("/api/Tasks", async (req, res) => {
  const db = client.db("Test");
  const tasksCollection = db.collection("Tasks");
  const tasks = await tasksCollection.find({}).toArray();
  res.json(tasks);
});

app.get("/api/Tasks/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const db = client.db("Test");
    const tasksCollection = db.collection("Tasks");
    const tasks = await tasksCollection.find({ userId: userId}).toArray();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error Fetching Tasks:', error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
});


app.post("/api/Tasks", async (req, res) => {
  const taskData = req.body;

  try {
    const db = client.db("Test");
    const tasksCollection = db.collection("Tasks");
    const result = await tasksCollection.insertOne(taskData);
    const taskId = result.insertedId;

    const createdTask = await tasksCollection.findOne({ _id: taskId });

    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
});


app.get("/api/Tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  console.log('Received taskId:', taskId);
  const db = client.db("Test");
  const tasksCollection = db.collection("Tasks");
  const task = await tasksCollection.findOne({ _id: new ObjectId(taskId) });

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

app.delete("/api/Tasks/:id/:userId", async (req, res) => {
  const taskId = req.params.id;
  const userId = req.params.userId; 
  console.log("Deleting task with id:", taskId);

  try {
    const db = client.db("Test");
    const tasksCollection = db.collection("Tasks");
    const task = await tasksCollection.findOne({ _id: new ObjectId(taskId), userId: userId });

    if (!task) {
      res.status(404).send({ message: "Task not found" });
      return;
    }

    const result = await tasksCollection.deleteOne({ _id: new ObjectId(taskId), userId: userId });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(500).json({ message: "Error deleting task" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

app.post("/api/reloadDB", async (req, res) => {
  const { userId } = req.body;
  try {
    await loadDB(userId);
    res.status(200).json({ message: "Database reloaded successfully" });
  } catch (error) {
    console.error("Error reloading DB:", error);
    res.status(500).json({ message: "Error reloading database" });
  }
});



app.listen(port, async () => {
  try {
    await loadDB();
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error('Error initializing database:', error);
  }
});

const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

// MongoDB Atlas URI
const uri = "mongodb+srv://amirch:resa123@resa.8kkkqma.mongodb.net/resa";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB Atlas
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
}

connectToMongoDB();

// CREATE: Add a new host
router.post('/', async (req, res) => {
  try {
    const newHost = req.body; // Assuming the host data is sent in the request body
    const coll = client.db('Resa').collection('Hosts');
    const result = await coll.insertOne(newHost);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating host:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch all hosts
router.get('/', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Hosts');
    const hosts = await coll.find().toArray();
    res.json(hosts);
  } catch (err) {
    console.error('Error fetching hosts:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch host by ID
router.get('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Hosts');
    const host = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!host) {
      return res.status(404).json({ message: 'Host not found' });
    }
    res.json(host);
  } catch (err) {
    console.error('Error fetching host:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE: Update a host by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedHost = req.body; // Assuming the updated host data is sent in the request body
    const coll = client.db('Resa').collection('Hosts');
    const result = await coll.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedHost }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Host not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error updating host:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE: Delete a host by ID
router.delete('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Hosts');
    const result = await coll.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Host not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error deleting host:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

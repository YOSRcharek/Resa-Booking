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

// CREATE: Add a new Availability entry
router.post('/', async (req, res) => {
  try {
    const newAvailabilityEntry = req.body; // Assuming the Availability entry data is sent in the request body
    const coll = client.db('Resa').collection('Availability');
    const result = await coll.insertOne(newAvailabilityEntry);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating Availability entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch all Availability entries
router.get('/', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Availability');
    const AvailabilityEntries = await coll.find().toArray();
    res.json(AvailabilityEntries);
  } catch (err) {
    console.error('Error fetching Availability entries:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch Availability entry by ID
router.get('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Availability');
    const AvailabilityEntry = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!AvailabilityEntry) {
      return res.status(404).json({ message: 'Availability entry not found' });
    }
    res.json(AvailabilityEntry);
  } catch (err) {
    console.error('Error fetching Availability entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/propertyById/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Availability');
    const propertyId = req.params.id;
    const AvailabilityEntries = await coll.find({ property_id: propertyId }).toArray();
   
    if (AvailabilityEntries.length === 0) {
      return res.status(404).json({ message: 'Availability entries not found' });
    }

    res.json(AvailabilityEntries);
  } catch (err) {
    console.error('Error fetching Availability entries:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
// UPDATE: Update a Availability entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedAvailabilityEntry = req.body; // Assuming the updated Availability entry data is sent in the request body
    const coll = client.db('Resa').collection('Availability');
    const result = await coll.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedAvailabilityEntry }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Availability entry not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error updating Availability entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE: Delete a Availability entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Availability');
    const result = await coll.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Availability entry not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error deleting Availability entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

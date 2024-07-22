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

// CREATE: Add a new calendar entry
router.post('/', async (req, res) => {
  try {
    const newCalendarEntry = req.body; // Assuming the calendar entry data is sent in the request body
    const coll = client.db('Resa').collection('calendar');
    const result = await coll.insertOne(newCalendarEntry);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating calendar entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch all calendar entries
router.get('/', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('calendar');
    const calendarEntries = await coll.find().toArray();
    res.json(calendarEntries);
  } catch (err) {
    console.error('Error fetching calendar entries:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch calendar entry by ID
router.get('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('calendar');
    const calendarEntry = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!calendarEntry) {
      return res.status(404).json({ message: 'Calendar entry not found' });
    }
    res.json(calendarEntry);
  } catch (err) {
    console.error('Error fetching calendar entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE: Update a calendar entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCalendarEntry = req.body; // Assuming the updated calendar entry data is sent in the request body
    const coll = client.db('Resa').collection('calendar');
    const result = await coll.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedCalendarEntry }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Calendar entry not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error updating calendar entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE: Delete a calendar entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('calendar');
    const result = await coll.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Calendar entry not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error deleting calendar entry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

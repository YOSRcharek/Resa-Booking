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

// CREATE: Add a new reservation
router.post('/', async (req, res) => {
  try {
    const newReservation = req.body; // Assuming the reservation data is sent in the request body
    const coll = client.db('Resa').collection('Reservations');
    const result = await coll.insertOne(newReservation);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating reservation:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch all reservations
router.get('/', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Reservations');
    const reservations = await coll.find().toArray();
    res.json(reservations);
  } catch (err) {
    console.error('Error fetching reservations:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Reservations');
    const reservation = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (err) {
    console.error('Error fetching reservation:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE: Update a reservation by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedReservation = req.body; // Assuming the updated reservation data is sent in the request body
    const coll = client.db('Resa').collection('Reservations');
    const result = await coll.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedReservation }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error updating reservation:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE: Delete a reservation by ID
router.delete('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Reservations');
    const result = await coll.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error deleting reservation:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

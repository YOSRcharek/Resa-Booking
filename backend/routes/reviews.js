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

// CREATE: Add a new review
router.post('/', async (req, res) => {
  try {
    const newReview = req.body; // Assuming the review data is sent in the request body
    const coll = client.db('Resa').collection('Review');
    const result = await coll.insertOne(newReview);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating review:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch all reviews
router.get('/', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Review');
    const reviews = await coll.find().toArray();
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch review by ID
router.get('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Review');
    const review = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    console.error('Error fetching review:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE: Update a review by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedReview = req.body; // Assuming the updated review data is sent in the request body
    const coll = client.db('Resa').collection('Review');
    const result = await coll.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedReview }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error updating review:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE: Delete a review by ID
router.delete('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Review');
    const result = await coll.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error deleting review:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

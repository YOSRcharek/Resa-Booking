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

// CREATE: Add a new property
router.post('/', async (req, res) => {
  try {
    const newProperty = req.body; // Assuming the property data is sent in the request body
    const coll = client.db('Resa').collection('Property');
    const result = await coll.insertOne(newProperty);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error creating property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch all properties
router.get('/', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Property');
    const properties = await coll.find().toArray();
    res.json(properties);
  } catch (err) {
    console.error('Error fetching properties:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// READ: Fetch property by ID
router.get('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Property');
    const property = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    console.error('Error fetching property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/getByDest/:dest', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Property');
    const dest = req.params.dest;
    const property = await coll.find({ 'location.city': dest }).toArray();


    res.json(property);
  } catch (err) {
    console.error('Error fetching property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/getByType/:type', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Property');
    const dest = req.params.type;
    const property = await coll.find({ 'type': dest }).toArray();


    res.json(property);
  } catch (err) {
    console.error('Error fetching property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/getImages/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Property');
    const property = await coll.findOne({ _id: new ObjectId(req.params.id) });
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    const allPhotos = property.apartment_spaces.reduce((acc, space) => {
      return acc.concat(space.photos);
    }, []);

    res.json(allPhotos);
  } catch (err) {
    console.error('Error fetching property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
// UPDATE: Update a property by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedProperty = req.body; // Assuming the updated property data is sent in the request body
    const coll = client.db('Resa').collection('Property');
    const result = await coll.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updatedProperty }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error updating property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE: Delete a property by ID
router.delete('/:id', async (req, res) => {
  try {
    const coll = client.db('Resa').collection('Property');
    const result = await coll.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(result);
  } catch (err) {
    console.error('Error deleting property:', err);
    res.status(500).json({ message: 'Server error' });
  }
});





module.exports = router;

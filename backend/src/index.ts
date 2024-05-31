import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User';
import Service from './models/Service';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://20460323:Fabian150901@chambalancer.xeeipwq.mongodb.net/';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

app.post('/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  try {
    const newUser = new User({ firstName, lastName, email, phoneNumber, password });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error registering user', details: error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).send({ error: 'Invalid email or password' });
    }
    res.send({ message: 'Login successful', user });
  } catch (error) {
    res.status(400).send({ error: 'Error logging in', details: error });
  }
});

app.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (error) {
    res.status(400).send({ error: 'Error fetching services', details: error });
  }
});

app.post('/services', async (req, res) => {
  const { name, description, price, author } = req.body;
  try {
    const newService = new Service({ name, description, price, author });
    await newService.save();
    res.status(201).send({ message: 'Service published successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error publishing service', details: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

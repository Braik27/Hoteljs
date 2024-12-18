const express = require('express');
const Hotel = require('../models/Hotel');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/search', async (req, res) => {
  try {
    const hotels = await Hotel.find({ nbrRooms: { $gte: 10, $lte: 100 } });
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (hotel) res.json(hotel);
    else res.status(404).json({ message: 'Hotel not found' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (hotel) res.json({ message: 'Hotel deleted' });
    else res.status(404).json({ message: 'Hotel not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

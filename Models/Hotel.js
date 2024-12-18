const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fabrication: { type: Date, required: true },
  nbrRooms: { type: Number, default: 10 },
});

module.exports = mongoose.model('Hotel', hotelSchema);


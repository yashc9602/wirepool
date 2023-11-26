const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    status: { type: String, enum: ['Pending', 'InProgress', 'Completed'], default: 'Pending' },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: Number, required: true },
    phone: { type: Number, required: true },


});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

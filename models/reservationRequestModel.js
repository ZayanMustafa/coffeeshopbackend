



import mongoose from 'mongoose';

const reservationRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        lowercase: true,
        unique: true
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        min: [new Date(), 'Date must be in the future']
    },
    time: {
        type: String,
        required: [true, 'Time is required']
    },
    numberOfGuests: {
        type: Number,
        required: [true, 'Number of guests is required'],
        min: [1, 'At least 1 guest is required']
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });



export default mongoose.model('ReservationRequest', reservationRequestSchema);
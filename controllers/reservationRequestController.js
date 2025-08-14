


import reservationRequestModel from "../models/reservationRequestModel.js";



// Create a new reservation
export const createReservationRequest = async (req, res) => {
    try {
        const reservation = await reservationRequestModel.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};





// Get all reservations
export const getReservationRequests = async (req, res) => {
    try {
        const reservations = await reservationRequestModel.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





// Get a single reservation by ID
export const getReservationRequestById = async (req, res) => {
    try {
        const reservation = await reservationRequestModel.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





// Update a reservation
export const updateReservationRequest = async (req, res) => {
    try {
        const reservation = await reservationRequestModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};





// Delete a reservation
export const deleteReservationRequest = async (req, res) => {
    try {
        const reservation = await reservationRequestModel.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





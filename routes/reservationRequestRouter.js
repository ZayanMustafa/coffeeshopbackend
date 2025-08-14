


import express from 'express';
import { 
    createReservationRequest,
    getReservationRequests,
    getReservationRequestById,
    updateReservationRequest,
    deleteReservationRequest
} from '../controllers/reservationRequestController.js';



const router = express.Router();


// POST /api/reservationRequests
router.post('/', createReservationRequest); 




// GET /api/reservationRequests
router.get('/', getReservationRequests); 




// GET /api/reservationRequests/:id
router.get('/:id', getReservationRequestById); 




// PUT /api/reservationRequests/:id
router.put('/:id', updateReservationRequest); 




// DELETE /api/reservationRequests/:id
router.delete('/:id', deleteReservationRequest);




export default router;
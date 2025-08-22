


    import express from 'express';
    import mongoose from 'mongoose';
    import cors from 'cors';
    import chalk from 'chalk';
    import reservationRequestRouter from './routes/reservationRequestRouter.js';
    import dotenv from 'dotenv';

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 5000;




    // Middleware
    app.use(cors());
    app.use(express.json());





    // MongoDB Connection
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/coffeeapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log(chalk.green('✅ MongoDB connected successfully')))
        .catch(err => console.error(chalk.red('❌ MongoDB connection error:', err)));




    // API Routes
    app.use('/api/reservationRequests', reservationRequestRouter);





    // 404 Handler
    app.use((req, res) => {
        res.status(404).json({ error: 'Route not found' });
    });





    // Error Handler
    app.use((err, req, res, next) => {
        console.error(chalk.red('🚨 Server error:', err));
        res.status(500).json({ error: 'Internal server error' });
    });

    app.listen(port, () => {
        console.log(chalk.cyan.bold(`🚀 Server running on http://localhost:${port}`));
    });



    
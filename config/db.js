import mongoose from 'mongoose';



export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URL;
        
        mongoose.set('debug', true);  

        await mongoose.connect(dbURI, {
           
        });

        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

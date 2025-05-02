import mongoose from 'mongoose';

const connectDB = async () => {
      try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('Mongo db data base connected..');
            // useNewUrlParser: true,
            // useUnifiedTopology: true,

            console.log('MongoDB connected...');
      } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1);

      }
}

export default connectDB;
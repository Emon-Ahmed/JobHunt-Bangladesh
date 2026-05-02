import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGODB;

  if (!mongoURI) {
    throw new Error("Missing MONGODB environment variable.");
  }

  if (!mongoURI.startsWith("mongodb://") && !mongoURI.startsWith("mongodb+srv://")) {
    throw new Error(
      "Invalid MONGODB environment variable. Use a mongodb:// or mongodb+srv:// connection string."
    );
  }

  try {
    if (mongoose.connection.readyState === 1) {
      const currentURI = mongoose.connection.client?.s?.url;

      if (!currentURI || currentURI === mongoURI) {
        return Promise.resolve(true);
      }

      await mongoose.disconnect();
    }

    const { connection } = await mongoose.connect(mongoURI);
    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectDB;

import mongoose from "mongoose";

const connection = process.env.CONNECTION_DB;
export const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }
    try {
        if (connection) {
            await mongoose.connect(connection);
            console.log("Connected to the db");
        } else {
            console.error("Something wrong with connection string");
        }

    } catch (err) {
        console.error(err);
    }
}
import mongoose from "mongoose";
import { DATABASE_NAME } from '../constent.js'
const connectDatabase = async () =>
    {
        try 
        {
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`)
            console.log(` \n Database connected!! to HOST ${connectionInstance.Connection.host}` );
        } catch (error) 
        {
            console.log("Error", error)
            process.exit(1)
        }
    }

export default connectDatabase
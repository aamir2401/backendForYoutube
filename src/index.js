import dotenv from "dotenv"
import connectDatabase from "./db/database.js";
import express from "express"
const app = express()
dotenv.config({path: './env'})
connectDatabase()
.then( () =>
{
    app.listen(process.env.PORT, (req,res) =>
    {
        res.send(`App is listning to PORT ${process.env.PORT}`)
    })
})
.catch( (error) =>
{
    console.error("Error countered!!", error)
})
































// ( async() => 
// {
//     try 
//     {
//        await mongoose.connect(`${process.env.DATABASE_URL}/ ${DATABASE_NAME}`)
//        app.on("error", (error) =>
//     {
//         console.log("ERRRRR", error)
//     })
//        app.listen(process.env.PORT, () =>
//     {
//         console.log(`App is listning to port ${process.env.PORT}`)
//     })
//     } catch (error) 
//     {
//         console.log("ERROR", error)
//         throw error
//     }
// })()

































































// import {DATABASE_NAME} from "./constent"
// ( async() =>
// {
//     try {
//          mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`)
//     } catch (error) {
//         console.error("ERROR", error)
//         throw err
//     }
    
// })()
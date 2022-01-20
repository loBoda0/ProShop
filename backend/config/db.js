import mongoose from "mongoose"

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/PROSHOP", {
            useNewUrlParser: true
        })

        console.log(`MongoDB connected`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB
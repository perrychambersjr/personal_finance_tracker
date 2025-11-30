import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables')
        }

        const conn = await mongoose.connect(process.env.MONGO_URI)
        
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`)
        } else {
            console.error('An unexpected error occurred during database connection')
        }
        process.exit(1)
    }
}
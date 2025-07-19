import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000

const app = express()
await connectDB()

// 🛑 Clerk webhook must receive raw body
app.use('/api/user/webhooks', express.raw({ type: 'application/json' }))

// ✅ Use normal JSON parsing and CORS for all other routes
app.use(express.json())
app.use(cors())
app.use('/api/image',imageRouter)

app.get('/', (req, res) => res.send("API WORKING"))
app.use('/api/user', userRouter)

app.listen(PORT, () => console.log("HEHEHHE"))

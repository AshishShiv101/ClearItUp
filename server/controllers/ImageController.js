import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'
import userModel from '../models/userModel.js'
import dotenv from 'dotenv'
dotenv.config()

const removeBgImage = async (req, res) => {
  try {
    const clerkId = req.clerkId // ✅ fixed

    const user = await userModel.findOne({ clerkId })
    if (!user) {
      return res.json({ success: false, message: "User Not Found" })
    }

    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: 'No Credit Balance',
        creditBalance: user.creditBalance,
      })
    }

    const imagePath = req.file.path
    const imageFile = fs.createReadStream(imagePath)

    const formdata = new FormData()
    formdata.append('image_file', imageFile)

    const { data } = await axios.post(
        process.env.CLIPDROP_API_URL, // ✅ Set this in .env
      formdata,
      {
        headers: {
          ...formdata.getHeaders(),
              'X-Api-Key': process.env.CLIPDROP_API_KEY, // ✅ Replace with your API key
        },
        responseType: 'arraybuffer',
      }
    )

    const base64Image = Buffer.from(data, 'binary').toString('base64')
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    })

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: 'Background Removed',
    })
  } catch (error) {
    console.error(error.message)
    return res
      .status(400)
      .json({ success: false, message: error.message || 'Something went wrong' })
  }
}

export { removeBgImage }

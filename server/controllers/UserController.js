import { Webhook } from 'svix'
import userModel from '../models/userModel.js'

const clerkWebhooks = async (req, res) => {
    try {
        const payload = req.body.toString() // raw body string
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }

        const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        const evt = wh.verify(payload, headers)

        const { data, type } = evt

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                }

                await userModel.create(userData)
                return res.status(200).json({ success: true })
            }

            case "user.updated": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData)
                return res.status(200).json({ success: true })
            }

            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id })
                return res.status(200).json({ success: true })
            }

            default:
                return res.status(204).send()
        }

    } catch (error) {
        console.error("Webhook Error:", error.message)
        return res.status(400).json({ success: false, message: error.message })
    }
}



const userCredits = async(req,res) => {
    try {
        
        const {clerkId} = req.body

        const userData = await userModel.findOne({clerkId})

        res.json({success:true,credits:userData.creditBalance})
        
    } catch (error) {
            console.error(error.message)
            return res.status(400).json({ success: false, message: error.message })
    }
}

export {clerkWebhooks,userCredits}
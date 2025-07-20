import { Webhook } from 'svix'
import userModel from '../models/userModel.js'
import razorpay from 'razorpay'
import transactionModel from '../models/transactionModel.js'


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



const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

const paymentRazorpay = async (req,res) =>{
    try {
        
        const {clerkId,planId} = req.body

        const userData = await userModel.findOne({clerkId})

        if(!userData || !planId){
            return res.json({success:false,message:'Invalid Credentials'})
        }

        let credits,plan,amount,date 
        
        switch(planId){
            case 'Basic':
                plan = 'Basic'
                credits = 100
                amount = 10
                break;

            case 'Advanced':
                plan = 'Advanced'
                credits = 500
                amount = 50
                break;

            case 'Business':
                plan = 'Business'
                credits = 5000
                amount = 250
                break;

            default:
                break;

        }

        data = Date.now()
        
        const transactionData = {
            clerkId,
            plan,
            amount,
            credits,
            date
        }

        const newTransaction = await transactionModel.create(transactionData)

        const options ={
            amount: amount * 100,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id,
        }

        await razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                return res.json({success:false,message:error})
            }
            res.json({success:true,order})
        })

    } catch (error) {
        console.error(error.message)
        return res.status(400).json({ success: false, message: error.message })
    }
}


key_secret: process.env.RAZORPAY_KEY_SECRET
export {clerkWebhooks,userCredits}
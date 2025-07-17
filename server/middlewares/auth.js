import jwt from 'jsonwebtoken'

const authUser = async(req,res,next) => {
    try {
        
        const {token} = req.headers

        if(!token){
            return res.json({success:false,message:'Not Authorized login again'})
        }

        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode.clerkId
        next()

    } catch (error) {
        console.error( error.message)
        return res.status(400).json({ success: false, message: error.message })
    }
}

export default authUser
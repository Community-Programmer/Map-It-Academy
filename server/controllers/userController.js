import userModel from "../models/Auth/userModel";

export const userData =  async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findOne({_id: userId})

        const userData = {
            username: user.username,
            email: user.email,
            joinedAt: user.createdAt,
        }

        
        res.status(200).json({ userData });
        
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}
import jwt from 'jsonwebtoken';


const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15 d" })


    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//15 days in ms
        httpOnly: true,  //user cannot access this cookie by javascript. it prevents XSS attcks or cross-site scripting attacks
        sameSite: "strict",//It alse used in prevent from some attacks
        secure: process.env.NODE_ENV !== "development" //http when localhost else https
    })
}


export default generateTokenAndSetCookie;
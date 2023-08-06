import {db} from "../db/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req, res) => {
    const {email, username, password} = req.body;
    //check if user exists
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [email, username], (err, data) => {
        if(err){
            console.log(err.message);
            return res.json(err);
        } 
            
        if(data.length) return res.status(409).json("User already exists!");

        //hash the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [username, email, hash];

        db.query(q, [values], (err, data) => {
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        })
    });
}

export const login = async(req, res) => {
    const {username, password} = req.body

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [username], (err, data) => {
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found!");

        const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password");

        const token = jwt.sign({id: data[0].id}, "jwtkey") 
        //would be better to store secret in a .env file
        const {pass, ...other} = data[0];

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other); //send evthng except password


    })
}

export const logout = async(req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out");
}
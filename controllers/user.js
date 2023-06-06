import { User } from "../models/user.js";

export const getAllUsers=async(req,res)=>{
 
    const users= await User.find({});
      res.json({
         success:true,
         users
      })
 };
 export const createNewUser=async(req,res)=>{
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    res.status(201).json({
        success:true,
        message:"Registered Successfully"
    })
};
export const getUser=async (req,res)=>{
    const {id}=req.params;
    const user= await User.findById(id);
    res.json({
        success:true,
        user,
    })
}

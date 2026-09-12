import mongoose,{Schema} from "mongoose";


import  jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const userSchema = new Schema({
   username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    index:true //for faster/optimized search
   },
    email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    
   },

    fullName:{
    type:String,
    required:true,
    trim:true,
    index:true //for faster/optimized search
    
   },

    avatar:{
    type:String, //cloudinary url of the image
    required:true,   
   },
     coverImage:{
    type:String, //cloudinary url of the image 
   },
   coverImage:{
    type:String, //cloudinary url of the image 
   },
   watchHistory:[{
    type:Schema.Types.ObjectId,
    ref:"Video"
   }],
   password:{
    type:String,  //PASSWORD ko encrypt karne ke liye hum bcryptjs ka use karenge, aur password ko hash karenge before saving it to the database.
    required:[true, "Password is required"],
   },
   refreshToken:{
    type:String,
   },



},{timestamps:true})

userSchema.pre("save",async function(next){ 
    if(!this.isModified("password")) return next(); //if password is not modified, then we don't need to hash it again.
    this.password = await bcrypt.hash(this.password,10); //hashing the password with salt rounds 10
    next();
})

userSchema.methods.ispPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password); //comparing the password with the hashed password    
}

userSchema.methods.generateAccessToken= function(){
   return  jwt.sign(
        {
            _id:this._id,
            username:this.username,
            email:this.email,
            fullName:this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,    
        { 
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
             
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)
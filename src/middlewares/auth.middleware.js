import {asynhandler} from"../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
 import {jwt} from "jsonwebtoken"
export const verifyJWT = asyncHssndler(async(req,res,next)=>{
  try {
     const token= req.cookies?.accessToken || req.header("Authorizaation")?.replace("Bearer ","") 
  
  if(!token){
      throw new ApiError(401,"Unauthorized request")
  }
  
  const decodedToken=jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)  //verfying user when it coming after loggin
  
  const user=await User.findById(decodedToken?._id).select("-password-refreshToken")
  
  if(!user){
      // next_video lec 17=>todo discuss about frontend
      throw new ApiError(401,"Invalid Access Token")
  }
  
  req.user=user;
  next();
  } catch (error) {
    throw new ApiError(401,error?.message|| "invalid access token")
  }

})




// req.header("Authorizaation")?.replace("Bearer ","")  for moblile app
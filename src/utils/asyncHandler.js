const asyncHandler=(requestHandler)=>{
 return  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next))
    .catch((err)=>{next(err)
    })
  }
}

export{ asyncHandler}


// const asyncHandler=(fn)=>async (req,res,next)=>{ 
//   try{
//    await fn(req,res,next)  // fn is the function that we are passing to asyncHandler, it can be any function that returns a promise.
//   }
//   catch(error){
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//     })
//   }
// }
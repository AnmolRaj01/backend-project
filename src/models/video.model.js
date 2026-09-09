 import monggoose,{Schema} from "mongoose";
const videoSchema = new Schema({
 

    videoFile:{
    type:String, //cloudinary url of the video
    required:true,   
   },
     thumbnail:{
    type:String, //cloudinary url of the video thumbnail
    required:true,   

   },
     title:{
    type:String, 
    required:true,   

   },
    description:{
    type:Number, // cloudainary url
    required:true,   

   },
   duration:{
    type:Number, 
    required:true,   
   },

    views:{
    type:Number, 
    default:0,
   },
   isPublished:{
    type:Boolean,
    default:true
   },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },

},{timestamps:true})

videoSchema.plugin
export const Video = mongoose.model("Video",videoScheema)
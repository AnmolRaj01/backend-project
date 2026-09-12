import multer from  "multer";

 const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temp");   //storing file on server public/temp folder
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
 })

 export const upload=multer({storage:storage})
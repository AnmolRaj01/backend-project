import {v2 as cloudinary} from 'cloudinary';
 import fs from 'fs';
   

 cloudinary.config({
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
     api_key: process.env.CLOUDINARY_API_KEY,
     api_secret: process.env.CLOUDINARY_API_SECRET
   });

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto', //auto,video,image,etc
    });
   //file has been successfully uploaded
  //  console.log("file is uploaded on cloudinary",response.url);

  fs.unlinkSync(localFilePath)

    return response;

  } catch (error) {
    fs.unlinkSync(localFilePath);// remove the locally save temporary file as the upload operation got failed
    console.error('Cloudinary upload error:', error);
    return null;  //because response function return something 
  }
};

// or without error handling
//    cloudinary.uploader.upload(" https://upload.wikimedia.org/wikipedia/commons/a/e/01_Cat_in_the_lap.jpg", { resource_type: "auto" })


export { uploadOnCloudinary };







import { Router } from "express";

import {registerUser,logoutUser,loginUsers} from "../controllers/user.controller.js";

import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router =Router()


router.route("/register").post(
    upload.fields([
        {name:"avatar",
          maxCount:1
        },                    //storing avatar and coverImage in disk storage using multer
        {name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)

router.route("/loginUser").post(loginUser)

router.route("/logout",post(verifyJWT,logoutUser))
export default router  
 
  
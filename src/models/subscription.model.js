import mongoose,{schema} from "mongoose"

const subscriptionSchema= new schema({
    //id mongoose khud hi bna dena h hrr ek entry k liye so alag se bnane ki need nhi h

    channel:{
         type:Schema.Types.ObjectId, //one to whom 'subscriber' is subscribing
         ref:"User"
    }

},{timestamps:true})

export const Subscription= mongoose.model("Subscription",subscriptionSchema)
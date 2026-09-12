
//file for handling api errors (mtlv arror aayega tou iss format me ayega)


class ApiError extends Error{
    constructor(statusCode, message="something went wrong",error=[],stack=""){
        super(message);
        this.statusCode=statusCode;
        this.error=error;
        this.data=null;
        this.message=message;
        this.success=false;
        this.errors=error;
        if(stack){
           this.stack=stack; 
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }

    }
}

export { ApiError }
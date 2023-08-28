import mongoose from "mongoose";


let usershema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true


    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    , password: {
        type: String,
        required: true,

    }
})
let User  = mongoose.model("User",usershema);

export {User}

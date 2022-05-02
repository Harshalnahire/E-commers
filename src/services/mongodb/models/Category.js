import mongoose from "mongoose";
import Product from "./Product";

const CategorySchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true,
        maxlength:500,
        minlength: 10,
    }
},{
    timestamps:true
})

export const Category = new mongoose.model("Category",CategorySchema);

 
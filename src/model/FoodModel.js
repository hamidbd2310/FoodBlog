const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    name:{type:String, required:true, unique:true},
    code:{type:String},
    image:{type:String},
    category:{type:String},
    qty:{type:String},
    price:{type:String},
},{timestamps:true,versionKey:false});

const FoodModel = mongoose.model('food',DatabaseSchema);
module.exports = FoodModel
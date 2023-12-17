var mongoose = require( "mongoose" ); 
var hour = new mongoose.Schema({ 
    days: { type: String, required: true }, 
    opening: String, 
    closing: String, 
    kapali: { type: Boolean, required: true } 
});
 var comment = new mongoose.Schema({ 
author:{type: String
    ,required:true},
rating:{type:Number,"default":0,min:0,max:5, default:0},
text:{ type: String, required: true },
date: { type: Date, "default": Date.now }
});
;
var venue= new mongoose.Schema({
 name:{type:String,required:true},
 address :String,
 rating:{type:Number,"default":0,min:0,max:5, default:0},
 coordinates:{type:[Number],index:'2dsphere'},
foodanddrink:[String],
comments:[comment],
hours:[hour]
});

mongoose.model('venue',venue,"venues");
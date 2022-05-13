const mongoose = require("mongoose");
const storeSchema=new mongoose.Schema({
    ownerName:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})
module.exports = mongoose.model("Store", storeSchema);
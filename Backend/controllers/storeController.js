const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Store = require("../models/storeModel");
// create new Store
exports.newStore= catchAsyncErrors(async (req, res, next) => {
    const {
        ownerName,
        address,
        phoneNo,
        pinCode
    } = req.body;
  
    const store = await Store.create({
        ownerName,
        address,
        phoneNo,
        pinCode,
        createdAt:Date.now(),
    });
  
    res.status(201).json({
        success: true,
        store,
    });
});
//get store on pincode
exports.getStore=catchAsyncErrors(async (req, res, next) => {
    const stores = await Store.find({ pinCode: req.params.pinCode });
  
    res.status(200).json({
      success: true,
      stores,
    });
});


// get all stores -- Admin
exports.getAllStores = catchAsyncErrors(async (req, res, next) => {
    const stores = await Store.find();
  
    res.status(200).json({
      success: true,
      stores,
    });
});
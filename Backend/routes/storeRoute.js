const express = require("express");
const {
    newStore,
    getAllStores,
    getStore,
} = require("../controllers/storeController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/store/:pinCode").get(getStore)

router
  .route("/admin/stores")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllStores);

  router
  .route("/admin/stores/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newStore);

  module.exports=router;
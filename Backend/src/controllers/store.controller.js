const express = require("express");
const router = express.Router();

const Store = require("../models/store.model");


router.get("/:storeId", async function(req, res) {
     try {
          const store = await Store.findById(req.params.storeId).lean().exec();
          return res.status(200).json({store});
     } catch (e) {
          console.log(e.message);
          return res
               .status(500)
               .json({message: 'Something went wrong !'});
     }
});

router.post("/:storeId", async function(req, res) {
     try {
          const store = await Store.create({
               ...req.body
          });
          return res.status(200).json({store});
     } catch (e) {
          console.log(e.message);
          return res
               .status(500)
               .json({message: 'Something went wrong !'});
     }
});


module.exports = router;
const express = require("express");
const router = express.Router();

const Location = require("../models/location.model");


router.get("/:locationSearch", async function(req, res) {
     try {
          const location = await Location.findById(req.params.storeId).lean().exec();
          return res.status(200).json({location});
     } catch (e) {
          console.log(e.message);
          return res
               .status(500)
               .json({message: 'Something went wrong !'});
     }
});

router.post("/:locationId", async function(req, res) {
     try {
          const location = await Location.create({

          });
          return res.status(200).json({location});
     } catch (e) {
          console.log(e.message);
          return res
               .status(500)
               .json({message: 'Something went wrong !'});
     }
});


module.exports = router;
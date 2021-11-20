const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

/**
 * updating user in cart oparation.
 * do we need other id's as well ? ...family members UUID for confirming it is purchased only once.
 * or it can be stored in other schema ?
 *
 *  */


//not sure about route endpoint
router.get("/:id", async function(req, res) {
     try {
          //
          const id = req.params.id;
          const user = await User.findById(id);
          return res.status(200).json({user: user});
     } catch (e) {
          console.log(e.message);
          return res
               .status(500)
               .json({message: 'Something went wrong !'});
     }
});

//not sure about route endpoint
router.post("/:id", async function(req, res) {
     try {
          //
          const id = req.params.id;
          const user = await User.findByIdAndUpdate(id, {
               ...req.body
          });
          return res.status(200).json({user: user});
     } catch (e) {
          console.log(e.message);
          return res
               .status(500)
               .json({message: 'Something went wrong !'});
     }
});
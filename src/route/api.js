const express = require('express');
const FoodController = require('../controller/FoodController');

const router = express.Router();



//Invoice
router.post('/food/createFood', FoodController.createFood)
router.get('/food/getAllFood', FoodController.getAllFood)
router.post('/food/updateFood/:id', FoodController.updateFood)
router.post('/food/deleteFood/:id', FoodController.deleteFood)
router.get('/food/getFoodById/:id', FoodController.getFoodById)







module.exports = router;
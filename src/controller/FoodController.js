const FoodModel = require('../model/FoodModel');

// Controller for creating a new food item
async function createFood(req, res) {
    try {
        const newFood = await FoodModel.create(req.body);
        res.json({ status: "Success", data: newFood });
    } catch (error) {
        res.status(400).json({status: "filed", message: error.message });
    }
}

// Controller for retrieving all food items
async function getAllFood(req, res) {
    try {
       
        const food = await FoodModel.find();
        if (!food || food.length === 0) {
            return res.status(404).json({ status: "Fail", message: "No Food Found " });
        }

        res.json({ status: "Success", data: food });
    } catch (err) {
        res.status(500).json({ status: "Fail", message: err.message });
    }
} 



// Controller for updating a food item
async function updateFood(req, res) {
    try {
        const { id } = req.params;
        const updatedFood = await FoodModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        res.json({ status: "Success", data: updatedFood });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controller for deleting a food item
async function deleteFood(req, res) {
    try {
        const { id } = req.params;
        const deletedFood = await FoodModel.findByIdAndDelete(id);

        if (!deletedFood) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        res.json({ message: 'Food item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// Controller for viewing a single food item
async function getFoodById(req, res) {
    try {
        const { id } = req.params;
        const food = await FoodModel.findById(id);
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json({ status: "Success", data: food });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createFood,
    getAllFood,
    updateFood,
    deleteFood,
    getFoodById
};

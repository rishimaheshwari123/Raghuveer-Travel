const express = require("express");
const { createCab, getAllCab,deleteCab } = require("../controllers/cab");
const router = express.Router();
const Cab = require("../model/cab.js")


router.post("/create", createCab);
router.get("/get", getAllCab);
router.delete("/delete/:id", deleteCab);



router.post('/save', async (req, res) => {
    try {
        // Parse the incoming JSON data
        const data = req.body;

        // Save the data to MongoDB using the Cab model
        const savedCabs = await Cab.insertMany(data);

        // Respond with a success message and the saved data
        res.status(201).json({
            success: true,
            message: 'Data saved successfully',
            cabs: savedCabs
        });
    } catch (error) {
        // Handle errors
        console.error('Error saving data:', error);
        res.status(500).json({
            success: false,
            message: 'Error saving data',
            error: error.message
        });
    }
});


module.exports = router;
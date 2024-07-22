const { uploadImageToCloudinary } = require("../config/imageUploader");
const cabModel = require("../model/cab");

const createCab = async (req, res) => {
  const {
    price,
    modelNumber,
    vName,
    year,
    doors,
    air,
    transmission,
    fuel,
    seats,

  } = req.body;

  console.log(seats)

  const thumbnail = req.files.image;
  try {
    if (
      !price ||
      !modelNumber ||
      !vName ||
      !year ||
      !doors ||
      !air ||
      !transmission ||
      !fuel ||
      !seats 
     
    ) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const cab = await cabModel.create({
      price,
      image: thumbnailImage.secure_url,
      modelNumber,
      vName,
      year,
      doors,
      air,
      transmission,
      fuel,
      seats,
   
    });
    res.status(200).send({
      success: true,
      message: "Cab created successfully",
      cab,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in create cab api!",
      error: error.message,
    });
  }
};

const getAllCab = async (req, res) => {
  try {
    const cabs = await cabModel.find({});
    res.status(200).send({
      totalCabs: cabs.length,
      cabs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting all cabs api!",
      error: error.message,
    });
  }
};



const deleteCab = async(req,res)=>{
  try {
    const {id} = req.params

    await cabModel.findByIdAndDelete(id)
    
    res.status(200).json({
      success: true,
      message: "Cab deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting cab api!",
      error: error.message,
    });
  }
}

module.exports = { createCab, getAllCab,deleteCab };

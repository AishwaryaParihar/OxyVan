const donorModel = require ('../models/donor')

const getDonorData = async (req, res) => {
    try{
        if (!req.file){
            return res.status(400).json({massage:'no file uploaded'})
        }

        const {filename} = req.file;
        const {name,contactNumber,email} = req.body;

        const newFile = new donorModel({
            name,contactNumber,email, 
            filePath : `/upload/${filename}`, 
        });

        await newFile.save();
        console.log(newFile)
        res.status(201).json({message:'file uploaded', file: newFile});
    }
    catch(error){
        console.error("error during product upload:", error);
        res.status(500).json({message:'file upload failed', error: error.message})
    }
}

model.exports = {getDonorData}
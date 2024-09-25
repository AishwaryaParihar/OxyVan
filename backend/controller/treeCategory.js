const { default: mongoose } = require("mongoose");
const treeSchema = require("../models/treeCategory");

const distributeTrees = async (req, res) => {
    console.log("Received ID:", req.params.id);  
  
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid Tree Category ID' });
    }

    try {
        const treeCategory = await treeSchema.findById(req.params.id);
        if (!treeCategory) {
            return res.status(404).json({ message: 'Tree category not found' });
        }

        const distributeCount = req.body.distributeCount;
        if (treeCategory.stock < distributeCount) {
            return res.status(400).json({ message: 'Not enough stock available' });
        }

        treeCategory.stock -= distributeCount;
        treeCategory.distributed += distributeCount;

        await treeCategory.save();
        res.json({ message: `Successfully distributed ${distributeCount} trees`, treeCategory });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports=distributeTrees
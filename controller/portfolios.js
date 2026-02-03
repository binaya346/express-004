import Model from "../model/portfolios.js"

export const getAllPortfolios = async (req, res) => {
    try {
        const response = await Model.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to Fetch the Portfolios.",
            "error": error
        })
    }
}

export const getPortfolioById = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await Model.findById(id)

        if(response){
            return res.status(200).json(response)
        }
        res.status(404).json({"message":"The provided id is not a valid portfolio id"})
        
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to Fetch the portfolios.",
            "error": error
        })
    }
}

export const createPortfolio = async (req, res) => {
    const body = req.body;
    const image = req.file ? req.file.filename : null;
    body.image = image;
    // A layer of validation if required.

    try {
        const response = await Model.create(body)
        res.status(201).json({
            "message": "Successfully created New portfolio",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to create new portfolio.",
            "error": error
        })
    }
}

export const updatePortfolio = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const isPortfolioAvailable = await Model.findById(id);
        if(!isPortfolioAvailable){
            return res.status(404).json({"message":"Cannot Update: The provided id is not a valid portfolio id"})
        }

        await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        const response = await Model.findById(id);
        res.status(200).json({
            "message": "Successfully Updated the portfolio",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to update the portfolio.",
            "error": error
        })
    }
}

export const deletePortfolio = async (req, res) => {
    const id = req.params.id

    try {
        const isPortfolioAvailable = await Model.findById(id);
        if(!isPortfolioAvailable){
            return res.status(404).json({"message":"Cannot Delete: The provided id is not a valid portfolio id"})
        }

        await Model.findByIdAndDelete(id)
        res.status(200).json({"Message":`Successfully deleted the portfolio with id ${id}`})

    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to delete the portfolio.",
            "error": error
        })
    }
}
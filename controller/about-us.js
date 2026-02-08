import Model from "../model/about-us.js"
import logger from "../utils/logger.js";

export const getAllAboutUs = async (req, res) => {
    try {
        const response = await Model.find()
        logger.info(`Response created successfully`);
        res.status(200).json(response)
    } catch (error) {
        logger.error("Error", error);
        res.status(400).json({
            "message": "Error: Unable to Fetch the aboutUss.",
            "error": error
        })
    }
}

export const getAboutUsById = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await Model.findById(id)

        if (response) {
            logger.info("Successfully fetched the about us details for ID" + id)
            return res.status(200).json(response)
        }
        res.status(404).json({ "message": "The provided id is not a valid aboutUs id" })

    } catch (error) {
        logger.error("Error:", error)
        res.status(400).json({
            "message": "Error: Unable to Fetch the aboutUss.",
            "error": error
        })
    }
}

export const createAboutUs = async (req, res) => {
    const body = req.body;
    // A layer of validation if required.

    try {
        const response = await Model.create(body)
        res.status(201).json({
            "message": "Successfully created New aboutUs",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to create new aboutUs.",
            "error": error
        })
    }
}

export const updateAboutUs = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const isaboutUsAvailable = await Model.findById(id);
        if (!isaboutUsAvailable) {
            return res.status(404).json({ "message": "Cannot Update: The provided id is not a valid aboutUs id" })
        }

        await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        const response = await Model.findById(id);
        res.status(200).json({
            "message": "Successfully Updated the aboutUs",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to update the aboutUs.",
            "error": error
        })
    }
}

export const deleteAboutUs = async (req, res) => {
    const id = req.params.id

    try {
        const isaboutUsAvailable = await Model.findById(id);
        if (!isaboutUsAvailable) {
            return res.status(404).json({ "message": "Cannot Delete: The provided id is not a valid aboutUs id" })
        }

        await Model.findByIdAndDelete(id)
        res.status(200).json({ "Message": `Successfully deleted the aboutUs with id ${id}` })

    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to update the aboutUs.",
            "error": error
        })
    }
}
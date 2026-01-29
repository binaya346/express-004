import Model from "../model/services.js"

export const getAllServices = (req, res) => {
    res.send("You will receive all the services from the database")
}

export const getServiceById = (req, res) => {
    res.send(`You will receive the service that matches the id: ${req.params.id}`)
}

export const createService = async (req, res) => {
    const body = req.body;
    // A layer of validation if required.

    try {
        const response = await Model.create(body)
        res.status(201).json({
            "message": "Successfully created New service",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Error: Unable to create new service.",
            "error": error
        })
    }
}

export const updateService = (req, res) => {
    const body = req.body;
    const id = req.params.id;

    // Get the service data from database using id and update that service 
    // with the body passed in the request

    res.json({
        "message": "Backend will update the existing resources using the data sent",
        "data": body,
        "id": id
    })
}

export const deleteService = (req, res) => {
    // Connect with database & delete the resource
    res.send(`Backend will delete the resource with id: ${req.params.id}`)
}

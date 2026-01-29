import express from "express";

const router = express.Router();

// Method for CRUD operation
// GET (get all services), We don't need anything in route or body. 
// GET (get service by id), We need id in route 
// POST (create new service), We need data of service in body. 
// PUT (Update existing service), We need data of service in body, we need id in route
// DELETE (Delete existing service), We need id in route

router.get("/", (req, res) => {
    res.send("You will receive all the about us from the database")
})

router.get("/:id", (req, res) => {
    res.send(`You will receive the about us that matches the id: ${req.params.id}`)
})

router.post("/", (req, res) => {
    const body = req.body;
    console.log("body")
    console.log(body)
    // Call database to create a new resource

    res.json({
        "message": "Backend will create a new resources using the data sent",
        "data": body
    })
})

router.put("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;

    // Get the service data from database using id and update that service 
    // with the body passed in the request

    res.json({
        "message": "Backend will update the existing resources using the data sent",
        "data": body,
        "id": id
    })
})

router.delete("/:id", (req, res) => {
    // Connect with database & delete the resource
    res.send(`Backend will delete the resource with id: ${req.params.id}`)
})

export default router;
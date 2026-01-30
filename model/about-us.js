import mongoose from "mongoose";

// Define a schema
const schema = new mongoose.Schema({
    title: String,
    description: String, 
    project_delivered: {
        type: String,
    },
    experience: {
        type: String,
    },
    team_member: {
        type: String,
    },
    countries_served: {
        type: String,
    }
}, { timestamps: true });

// Map the Schema with collection
const Model = mongoose.model('AboutUs', schema);

export default Model;
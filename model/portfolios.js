import mongoose from "mongoose";

// Define a schema
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty while creating portfolio'],
        minLength: [4, 'Portfolio title should be atleast 4 character long'],
        maxLength: 30
    },
    description: {
        type: String,
        required: [true, "Description cannot be empty while creating portfolio"],
        minLength: [20, 'Portfolio description should be atleast 20 character long']
    },
    image: {
        type: String,
    },
    tags: String, 
    project_link: String

}, { timestamps: true });

// Map the Schema with collection
const Model = mongoose.model('Portfolio', schema);

export default Model;
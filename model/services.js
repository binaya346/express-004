import mongoose from "mongoose";

// Define a schema
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty while creating service'],
        minLength: [4, 'Service title should be atleast 4 character long'],
        maxLength: 30
    },
    description: {
        type: String,
        required: [true, "Description cannot be empty while creating service"],
        minLength: [20, 'Service description should be atleast 20 character long']
    },
    cover_image: {
        type: String,
    },
    type: {
        type: String,
        enum: {
            values: ['Product', 'Manpower'],
            message: '{VALUE} is not supported'
        }
    }
}, { timestamps: true });

// Map the Schema with collection
const Model = mongoose.model('Service', schema);

export default Model;
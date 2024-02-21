import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    duration: {
        type: Number,
        required: true
    },
    milestone: [],
    description: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },
    student: [],
    mentor: [],
    project: []
}, {
    timestamps: true
})

const Course = mongoose.model('Course', CourseSchema);
export default Course;
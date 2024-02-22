import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Duration: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Guide: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('Project',ProjectSchema);
export default Project;
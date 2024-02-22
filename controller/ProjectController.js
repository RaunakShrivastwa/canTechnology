import projectSchema from '../model/ProjectSchema.js';

export default class ProjectController {
    async getAllProject(req,res) {
        try {
            const project = await projectSchema.find({});
            if(project) {
                return res.json({
                    "message": "Fetch All project successfully .....",
                    project
                });
            }else {
                return res.json({
                    "message": "There is no any Project available ....."
                });
            }
        } catch (error) {
            return res.json({
                "message": "There is somethings error found in fetching projects .....",
                error
            });
        }
    }
    
    async createProject(req,res) {
        try {
            const project = await projectSchema.create({... req.body});
            return res.json({
                "message": "Create project Successfully .....",
                project
            });
        } catch (error) {
            return res.json({
                "message": "There is somethings error found in creating projects .....",
                error
            });
        }
    }
    
    async getProjectByUser(req,res) {
        try {
            let project = await projectSchema.findOneAndUpdate({user: req.params.user},{$set: req.body});
            if(project) {
                project = await projectSchema.findOne({user: req.params.user});
                return res.json({
                    "message": "Fetch All project successfully .....",
                    project                    
                });
            }else {
                return res.json({
                    "message": "There is no any Project available ....."
                });
            }
        } catch (error) {
            return res.json({
                "message": "There is somethings error found in fetching projects by the userID.....",
                error
            });
        }
    }
    
    async updateProject(req,res) {}
    
    async deleteProject(req,res) {}
}
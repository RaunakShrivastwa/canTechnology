import Course from '../model/CourseSchema.js';

export default class CourseController {
    async createCourse(req, res) {
        try {
            const course = await Course.findOne({ name: req.body.name });

            if (course) {
                return res.json({
                    "message": "Already Available",
                    course
                });
            } else {
                const courseCreated = await Course.create({ ...req.body });
                return res.json({
                    "message": "Course Created Successfully",
                    courseCreated
                });
            }
        } catch (error) {
            console.log(error);
            return res.json({
                "message": "Something went wrong",
                error
            });
        }
    }

    async getAllCourse(req, res) {
        try {
            const course = await Course.find({});

            if (course) {
                return res.json({
                    "message": "Fetch All Course successfully .....",
                    course
                });
            } else {
                return res.json({
                    "message": "Course not found",
                    course
                });
            }
        } catch (error) {
            console.log(error);
            return res.json({
                "message": "Something went wrong during find course",
                error
            });
        }
    }

    async getCourseByName(req, res) {
        try {
            const courseInfo = await Course.findOne({ name: req.params.courseName });
            if (courseInfo) {
                return res.json({
                    "message": "Course fetch successfully ..... ",
                    courseInfo
                });
            } else {
                return res.json({
                    "message": "Course not founded"
                });
            }
        } catch (error) {
            return res.json({
                "message": "Something went wrong",
                error
            });
        }
    }

    async updateCourse(req, res) {
        try {
            const updateCourse = await Course.findOneAndUpdate({ name: req.params.name },
                { $set: req.body });
            if (updateCourse) {
                return res.json({
                    "message": "Course updated successfully .....",
                    updateCourse
                });
            } else {
                return res.json({
                    "message": "Course not founded"
                });
            }
        } catch (error) {
            return res.json({
                "message": "Something went wrong during update the course",
                error
            });
        }
    }

    async deleteCourse(req, res) {
        try {
            const deleteCourse = await Course.findOneAndDelete({ name: req.params.name });
            if (deleteCourse) {
                return res.json({
                    "message": "Course deleted successfully ..... ",
                    deleteCourse
                });
            } else {
                return res.json({
                    "message": "Course not founded"
                });
            }
        } catch (error) {
            return res.json({
                "message": "Something went wrong",
                error
            });
        }
    }
}
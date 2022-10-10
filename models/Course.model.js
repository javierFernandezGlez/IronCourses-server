const {Schema, model, default: mongoose} = require("mongoose");

const LessonSchema = new Schema({
    title: String,
    content: String,
    resource_url: String
})
const Lesson = model("Lesson", LessonSchema);


const CourseSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "This course must have a name"
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true,
        required: "This course must have a category"
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    published: {
        type: Boolean,
        default: false
    },
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: "Lesson"
    }]
})

const Course = model("Course", CourseSchema);

module.exports = {Course, Lesson};

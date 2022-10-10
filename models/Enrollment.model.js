const {Schema, model, default: mongoose} = require("mongoose");

const EnrollmentSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    updated: Date,
    enrolled: {
        type: Date,
        default: Date.now
    },
    lessonStatus: [{
        lesson: {
            type: Schema.Types.ObjectId,
            ref: "Lesson"
        },
        complete: Boolean
    }],
    completed: Date
})

const Enrollment = model("Enrollment", EnrollmentSchema);

export default Enrollment;
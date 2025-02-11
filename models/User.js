import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    telegramId: {
        type: String,
        required: true
    },
    subscribe: {
        type: Boolean,
        default: false
    },
    avatar: String,
    analysis: {
        videoUrl: String
    },
    trainingPlan: {
        type: Array,
        default: []
    },
    sub1: {
        type: Boolean, 
        default: false
    },
    sub2: {
        type: Boolean, 
        default: false
    },
    sub3: {
        type: Boolean, 
        default: false
    },
    sub4: {
        type: Boolean, 
        default: false
    },
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchema);

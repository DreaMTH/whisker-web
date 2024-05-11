import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        relatedUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
        }
    },
    {
        timestamps: true
    }
);
export const NewsModel = mongoose.model('News', NewsSchema);
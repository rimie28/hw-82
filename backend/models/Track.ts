import mongoose, {Schema} from "mongoose";

const TrackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    duration: {
        type: String,
    },
    number: {
        type: Number,
        required: true
    }
})

export const Track = mongoose.model('Track', TrackSchema)

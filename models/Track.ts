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
})

export const Track = mongoose.model('Track', TrackSchema)

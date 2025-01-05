import mongoose, {Schema} from "mongoose";

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref:'Artist',
        required: true
    },
    releaseYear: {
        type: Date,
        required: true
    },
    image: {
        type: String
    },
})

export const Album = mongoose.model("Album", AlbumSchema);
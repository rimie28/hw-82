import mongoose, {Schema} from "mongoose";

const ArtistSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    information: {
        type: String
    },
})

export const Artist = mongoose.model('Artist', ArtistSchema);
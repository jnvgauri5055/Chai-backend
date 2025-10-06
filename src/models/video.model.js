import mongoose, {Schema} from "mongoose"

const videoSchema = new Schema(
    {
        videofile: {
            type: String, // cloudinary url
            required: true,
        },
        thumbnail: {
             type: String,  // cloudinary url
            required: true,
        },
        title: {
            type: String,  // cloudinary url
            required: true,
        },
        description: {
            type: String,  // cloudinary url
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        vies: {
            type: Number,
            default: 0;
        },
        isPublic: {
            type: Boolean,
            default: true 
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },{ timestamps: true}
)


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)
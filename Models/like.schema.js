import { model, Schema } from "mongoose";

const likeItemModel = new Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "library",
    required: [true, "BookId is required"],
  },
});

const likeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "UserId is required"],
  },
  items: [likeItemModel], 
},
{
    timestamps : true
});

const Like = model("Like", likeSchema);

export default Like;

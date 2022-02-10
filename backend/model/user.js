import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  nicno: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

// collection creation //
const postUser = mongoose.model("user", userSchema);

//collection exports //
export default postUser;

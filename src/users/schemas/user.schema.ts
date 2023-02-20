import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }, //同じ名前のユーザネームは存在できない
  },
  password: {
    type: String,
    required: true,
  },
});

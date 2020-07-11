import { Model, DataTypes } from "../deps.ts";

class Post extends Model {
  static table = "post";
  static timestamps = true;

  static fields = {
    _id: {
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
}

export default Post;

import { Model, DataTypes, Relationships } from "../deps.ts";
import User from "./user.ts";

class Post extends Model {
  static table = "post";
  static timestamps = true;

  static defaults = {
    published: false,
  };

  static user() {
    return this.hasOne(User);
  }

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
    published: {
      type: DataTypes.BOOLEAN,
    },
    // userId: Relationships.belongsTo(User),
  };
}

export default Post;

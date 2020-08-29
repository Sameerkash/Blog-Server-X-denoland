import { DataTypes, Model } from "../deps.ts";
import Post from "./post.ts";

class User extends Model {
  static table = "users";

  static timestamps = true;

  static posts() {
    return this.hasMany(Post);
  }

  static fields = {
    _id: {
      primaryKey: true,
      autoIncrement: true,
    },

    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
}

export default User;

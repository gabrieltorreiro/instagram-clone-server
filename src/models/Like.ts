import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";
import Post from "./Post";

const Like = sequelize.define("Like", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});

User.hasMany(Like);
Post.hasMany(Like);

export default Like;

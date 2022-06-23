/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from "mongoose";
import { User } from "./users.types";
import logger from "../../utils/logger";
import * as bcrypt from "bcrypt";

const UserSchema = new Schema<User>(
  {
    name: String,
    email: String,
    password: String,
    verified: { type: Boolean, default: true },
    verifyToken: String,
    deleted: Boolean,
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        logger.error(saltError);
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            logger.error(hashError);
            return next(hashError);
          }
          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

UserSchema.index({ email: 1 },);

export const UserModel = model<User>("User", UserSchema);

void (async () => {
  await UserModel.syncIndexes();
})();

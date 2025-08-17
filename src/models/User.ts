import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  name?: string;
  email: string;
  password?: string; // Optional for OAuth users
  emailVerified?: Date | null;
  image?: string;
  role: "ADMIN" | "CUSTOMER";

  // E-commerce fields
  addresses: {
    fullName: string;
    street: string;
    city: string;
    state?: string;
    country: string;
    zip: string;
    phone?: string;
  }[];

  wishlist: mongoose.Types.ObjectId[]; // references Product IDs
  cart: {
    product: mongoose.Types.ObjectId; // reference Product
    quantity: number;
  }[];

  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional for OAuth users
    emailVerified: { type: Date },
    image: { type: String },

    role: {
      type: String,
      enum: ["ADMIN", "CUSTOMER"],
      default: "CUSTOMER",
    },

    addresses: [
      {
        fullName: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String },
        country: { type: String, required: true },
        zip: { type: String, required: true },
        phone: { type: String },
      },
    ],

    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

// Avoid recompiling model in dev (Next.js hot reload fix)
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;

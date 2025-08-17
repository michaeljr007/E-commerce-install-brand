import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "CUSTOMER",
      addresses: [],
      wishlist: [],
      cart: [],
    });

    return NextResponse.json({ message: "User created", user: newUser });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}

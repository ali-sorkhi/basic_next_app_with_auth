import { NextResponse } from "next/server";
import db from "@/app/utilities/db/db";
import Users from "@/app/utilities/db/models/Users";
import { hashPassword } from "@/app/utilities/auth";
import moment from "moment-jalaali";

//POST for creating new user
export const POST = async (req) => {
  try {
    //getting the request
    const { firstName, lastName, username, phone, password, role } =
      await req.json();

    //connecting to DB
    await db.connect();

    const existingUser = await Users.findOne({ username });

    if (existingUser)
      return NextResponse.json(
        { message: "User Already Exist", existingUser },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);

    //adding new user
    const newUser = new Users({
      firstName,
      lastName,
      username,
      phone,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    //sending the response
    return NextResponse.json(
      { message: "User Created", newUser },
      { status: 200 }
    );
  } catch (error) {
    await db.disconnect();
    return NextResponse.json(
      { message: "failed to create user", error },
      { status: 500 }
    );
  } finally {
    //DB disconnect
    await db.disconnect();
  }
};

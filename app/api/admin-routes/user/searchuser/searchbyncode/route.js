import { NextResponse } from "next/server";
import db from "@/app/utilities/db/db";
import Users from "@/app/utilities/db/models/Users";

export const POST = async (req) => {
  try {
    const { username } = await req.json();

    //connecting to DB
    await db.connect();

    const user = await Users.findOne({ username }).exec();
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json(
        { message: "user not found", error },
        { status: 500 }
      );
    }
  } catch (error) {
    await db.disconnect();
    return NextResponse.json(
      { message: "failed to Get users", error },
      { status: 500 }
    );
  } finally {
    //DB disconnect
    await db.disconnect();
  }
};

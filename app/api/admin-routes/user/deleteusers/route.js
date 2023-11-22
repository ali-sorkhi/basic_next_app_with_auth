import { NextResponse } from "next/server";
import db from "@/app/utilities/db/db";
import Users from "@/app/utilities/db/models/Users";

//POST for creating new user
export const DELETE = async (req) => {
  try {
    //connecting to DB
    await db.connect();

    await Users.deleteMany({ role: "user" });

    return NextResponse.json({ message: "Deleted all users" }, { status: 200 });
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

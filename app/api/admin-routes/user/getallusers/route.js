import { NextResponse } from "next/server";
import db from "@/app/utilities/db/db";
import Users from "@/app/utilities/db/models/Users";

export const GET = async (req) => {
  try {
    //connecting to DB
    await db.connect();

    const allUsers = await Users.find({ role: "user" });

    if (allUsers) return NextResponse.json(allUsers);
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

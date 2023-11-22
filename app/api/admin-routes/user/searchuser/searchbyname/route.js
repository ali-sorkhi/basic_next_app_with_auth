import { NextResponse } from "next/server";
import db from "@/app/utilities/db/db";
import Users from "@/app/utilities/db/models/Users";

export const POST = async (req) => {
  try {
    const { firstName, lastName } = await req.json();

    //connecting to DB
    await db.connect();

    if (firstName && !lastName) {
      const users = await Users.find({ firstName });
      if (users) return NextResponse.json(users);
    } else if (lastName && !firstName) {
      const users = await Users.find({ lastName });
      if (users) return NextResponse.json(users);
    } else {
      const users = await Users.find({ firstName, lastName });
      if (users) return NextResponse.json(users);
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

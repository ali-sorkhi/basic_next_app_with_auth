const { default: mongoose } = require("mongoose");

async function connect() {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected");
  } catch (error) {
    return Error("Database Connection Error");
  }
}

async function disconnect() {
  if (process.env.NODE_ENV === "production") {
    await mongoose.disconnect();
    console.log("disconnected");
  } else {
    console.log("not disconnected in Dev mode");
  }
}

const db = { connect, disconnect };
export default db;

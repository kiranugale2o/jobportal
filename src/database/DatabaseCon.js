import mongoose from "mongoose";
async function DatabaseConn() {
  const Mongo_DB = process.env.DATABASE_LINK;
  console.log(Mongo_DB);

  mongoose
    .connect(Mongo_DB)
    .then(() => {
      console.log("connected");
    })
    .catch(() => {
      console.log("disconnected");
    });
}

export default DatabaseConn;

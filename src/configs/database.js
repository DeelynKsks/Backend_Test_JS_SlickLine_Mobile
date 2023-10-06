import { connect } from "mongoose"

export async function connectToMongo() {
    connect(process.env.MONGO_DB_URI)
      .then((db) => console.log('MongoDB is connected to', db.connection.db.databaseName))
      .catch(err => console.log(err))
  }
import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () =>{
  connect(process.env.MONGO_DB!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions).then(
    ()=> console.log("connected to Mongo successfully"),
    (error)=>console.log(error)
  )
}
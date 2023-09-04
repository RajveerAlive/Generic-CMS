import mongoose from 'mongoose';



const Connection = async (username,password) => {
const uri = "mongodb+srv://${username}:${password}@dragonsurf.5yb3jwt.mongodb.net/?retryWrites=true&w=majority";

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    title: String,
    author: String,
    link: String,
    context: {
      type: String,
      default: null
    }
    
  });

mongoose.set('strictQuery', false);


autoIncrement.initialize(mongoose.connection);


userSchema.plugin(autoIncrement.plugin, 'post');
// we need to turn it into a model
const user = mongoose.model('post', userSchema);


export default user;
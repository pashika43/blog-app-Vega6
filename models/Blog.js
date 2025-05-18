const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
        title: { type: String, required: true },
  description: { type: String, required: true },


  
  image: { type: String },
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

         module.exports = mongoose.model('Blog', blogSchema);

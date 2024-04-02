const { Schema, model } = require('mongoose');
// This is a subdocument schema, it won't become its own model but 
const photoSchema = new Schema({
    photo: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    purchased: {
        type: Boolean,
        required: true,
    },
    favoritored: {
        type: Boolean,
        required: true,
    },
    sold: {
        type: Boolean,
        required: true,
    },
    
  });
  
  module.exports = photoSchema;
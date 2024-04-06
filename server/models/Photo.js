const { Schema } = require('mongoose');

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
    data: {
      type: Buffer,
    },
   contentType: {
      type: String,
    },
    name: {
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
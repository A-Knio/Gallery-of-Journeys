const { Schema, Types } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPhotos` array in User.js
const photoSchema = new Schema({
    description: {
      type: String,
    },
    image: {
      type: Buffer,
      required: true,
    },
   contentType: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true
  },
    purchased: {
        type: Boolean,
        default: false,
        required: true,
    },
    favoritored: {
        type: Boolean,
        default: false,
        required: true,
    },
    sold: {
        type: Boolean,
        default: false,
        required: true,
    },
   
  });
 
  module.exports = photoSchema;
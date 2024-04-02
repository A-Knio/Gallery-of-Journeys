const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Photo.js
const photoSchema = require('./Photo');

const photographerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,  
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
          },
          password: {
            type: String,
            required: true,
          },
          // set savedPhotos to be an array of data that adheres to the photoSchema
          myPhotos: [photoSchema],    
    },
        {
            toJSON: {
            virtuals: true,
            },
        }
);

// hash user password
photographerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  photographerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  // when we query a user, we'll also get another field called `photoCount` with the number of saved photos we have
  photographerSchema.virtual('photoCount').get(function () {
    return this.savedPhotos.length;
  });
  
  const Photographer = model('User', photographerSchema);
  
  module.exports = User;
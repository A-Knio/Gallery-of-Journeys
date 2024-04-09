const { User, Photo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        me: async (parent, args, context) => {
           console.log("ello")
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        allPhotos: async () => {
            return Photo.find();
        }
    },
    Mutation: {
        addUser: async (parent, { username,  email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        uploadPhoto: async (_, { description, image, contentType, title }) => {
            const buffer = Buffer.from(image.split(',')[1], 'base64');
            const newPhoto = new Photo({
              description,
              image: buffer,
              contentType,
              title
            });
            await newPhoto.save();
            return newPhoto;
        },
        removePhoto: async (parent, { photoID }, context) => {
            if (context.user) {
              const photo = await Photo.findOneAndDelete({
                _id: photoID,
                username: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { photos: photo._id } }
              );
      
              return photo;
            }
            throw AuthenticationError;
          },
    }
};

module.exports = resolvers;

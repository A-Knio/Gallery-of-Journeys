const { User, Photo, File } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { firstName, lastName }) => {
            return User.findOne({ firstName, lastName }).populate('photos')
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('photos');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, { firstName, lastName,  email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
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
        uploadFile: async (_, { file }) => {
            const { createReadStream, filename, mimetype, encoding } = await file;
            const stream = createReadStream();
            // filepath probably needs to be changed.
            const filePath = path.join(__dirname, `./photos/${filename}`);
            await stream.pipe(fs.createWriteStream(filePath));
            return { filename, mimetype, encoding, path: filePath };
        },
        removePhoto: async (parent, { photoID }, context) => {
            if (context.user) {
              const photo = await Photo.findOneAndDelete({
                _id: photoID,
                photographer: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { photos: photo._id } }
              );
      
              return thought;
            }
            throw AuthenticationError;
          },
    }
};

module.exports = resolvers;
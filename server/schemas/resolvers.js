const { User, Photo } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
        return User.find({});
        },
        user: async (parent, { _id }) => {
        return User.findOne({ _id });
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
        const user = await User.create(args);
        return user;
        },
        createPhoto: async (parent, args) => {
        const photo = await Photo.create(args);
        return photo;
        }
    }
};

module.exports = resolvers;



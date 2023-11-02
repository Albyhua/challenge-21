const { Book, User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: { // query named me
        me: async (parent, args, context) => {
            if (context.user) {
                const data = await User.findOne({ _id: context.user._id });
                return data;
            }
            throw AuthenticationError('Error');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError(`Something is wrong Mister/Miss!`);
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError('Something is wrong Mister/Miss!');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { newBook }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: newBook } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw AuthenticationError('Error');
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw AuthenticationError(`Couldn't find user with this id!`);
        },
    }
}

module.exports = resolvers;
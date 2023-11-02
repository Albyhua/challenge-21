const typeDefs = `
type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}

type User {
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

# Go back to check savedBooks

type Auth {
    token: ID!
    user: User
  }

type Query {
    me: User
}

input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}

#Auth cuz we need to auth the user to create the user
#not sure if saved book is set up right, will check

type Mutation {
    login(email:String! , password:String! ): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User

}
`;

module.exports = typeDefs;
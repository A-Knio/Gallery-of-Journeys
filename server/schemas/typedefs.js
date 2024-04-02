const typeDefs = `
    type User {
     _id: ID!
     username: String!
     email: String!
     password: String!
     myPhotos: [Photo]
    }

    type Photo {
     _id: ID!
     title: String
     description: String
     image: String
     link: String
     purchased: Boolean
     favorited: Boolean
     sold: Boolean
     data: Buffer
     contentType: String
    }

    type Auth {
     token: ID
     user: User
    }

    input UserInput {
     _id: ID!
     username: String!
     email: String!
     password: String!
    }

    input PhotoInput {
     _id: ID!
     title: String
     description: String
     data: Buffer!
     contentType: String!
    }

    type Query {
      users: [User]
      user(username: String): User
      me: User
      photos: [Photos!]!

    }

    type Mutation {
        uploadPhoto(name: String!, description: String, data: String!, contentType: String!): Image!
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removePhoto(photoId: ID!): Photo
      }
`;

module.exports = typeDefs;
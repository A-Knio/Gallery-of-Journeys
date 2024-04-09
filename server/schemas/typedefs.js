const typeDefs = `
    type User {
     _id: ID!
     username: String!
     email: String!
     password: String!
     bio: String!
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
     bio: String!
    }

    input PhotoInput {
     _id: ID!
     title: String
     description: String
     image: String
     contentType: String!
    }

    type Query {
      users: [User]
      user(username: String): User
      bio: User 
      me: User
      photos: [Photo!]!
      allPhotos: [Photo!]!
    }

    type Mutation {
      updateBio(_id: ID!, bio: String!): User
      uploadPhoto(description: String, image: String!, contentType: String!, title: String!): Photo!
      addUser(username: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth
      removePhoto(photoId: ID!): Photo
    }
`;

module.exports = typeDefs;
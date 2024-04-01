const typeDefs = gql`
    type User {
     _id: ID!
     firstName: String!
     lastName: String
     email: String!
     password: String!
     photos: [Photo]
    }

    type Photo {
     _id: ID!
     title: String
     description: String
     location: String
     url: [String]
    }

    type File {
     filename: String!
     mimetype: String!
     encoding: String!
     path: String!   
    }

    type Auth {
     token: ID
     user: User
    }

    input UserInput {
     _id: ID!
     firstName: String!
     lastName: String
     email: String!
     password: String!
    }

    input PhotoInput {
      _id: ID!
      title: String
     description: String
     location: String
     url: [String] 
    }

    type Query {
      users: [User]
      user(firstName: String, lastName: String): User
      me: User

    }

    type Mutation {
        uploadFile(file: Upload!): File!
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removePhoto(photoId: ID!): Photo
      }
`;

module.exports = typeDefs;
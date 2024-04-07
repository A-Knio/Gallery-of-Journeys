const typeDefs = `
<<<<<<< HEAD

    type User {
        _id: ID
        username: String
        email: String
        password: String
        trips: [Trip]
    }

    type photo {
        _id: ID
        photoUrl: String
        title: String
        description: String
        location: String
        date: String
    }

    type Trip {
        _id: ID
        location: String
        date: String
        photos: [photo]
    }

    type Query {
        users: [User]
        user(_id: ID!): User
        photos: [photo]
        photo(_id: ID!): photo
        trips: [Trip]
        trip(_id: ID!): Trip
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        createPhoto(photoUrl: String!, title: String!, description: String!, location: String!, date: String!): photo
        createTrip(location: String!, date: String!): Trip
        addPhoto(tripId: ID!, photoId: ID!): Trip
    }
=======
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
     image: String
     contentType: String!
    }

    type Query {
      users: [User]
      user(username: String): User
      me: User
      photos: [Photo!]!
      allPhotos: [Photo!]!
    }

    type Mutation {
        uploadPhoto(name: String!, description: String, data: String!, contentType: String!): Photo!
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removePhoto(photoId: ID!): Photo
      }
>>>>>>> 3241fc4e5b2cf104b6dbe65b99f768c40d3d370c
`;

module.exports = typeDefs;
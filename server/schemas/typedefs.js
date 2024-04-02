const typeDefs = `

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
`;

module.exports = typeDefs;
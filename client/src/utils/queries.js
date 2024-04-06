import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query getUsers {
        user {
            _id
            username
            email
            myPhotos {
                _id
                title
                description
                image
                link
                purchased
                favorited
                sold
                data
                contentType
            }
        }
    }`;

export const QUERY_USER = gql`
    query getUser {
        user(_id: _id) {
            _id
            username
            email
            myPhotos {
                _id
                title
                description
                image
                link
                purchased
                favorited
                sold
                data
                contentType
            }
        }
    }`;


export const QUERY_ALLPHOTOS = gql`
    query getPhotos {
        photo {
            _id
            title
            description
            image
            link
            purchased
            favorited
            sold
            data
            contentType
          }
        }
    }`;

export const QUERY_ME = gql`
  query Me($userId: ID!) {
    user(id: $userId) {
      _id
      username
      email
      myPhotos {
        _id
        title
        description
        image
        link
        purchased
        favorited
        sold
        data
        contentType
      }
    }
  }
`;
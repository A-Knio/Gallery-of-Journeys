import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser(
  $username: String!
  $email: String!
  $password: String!
) {
  addUser(
    username: $username
    email: $email
    password: $password
  ) {
    token
    user {
      _id
    }
  }
}
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
            _id
        }
    }
}
`;

export const UPLOAD_PHOTO = gql`
  mutation uploadPhoto(
    $title: String!
    $description: String!
    $image: Upload!
    $link: String!
    $data: String!
    $contentType: String!
  ) {
    uploadPhoto(
      title: $title
      description: $description
      image: $image
      link: $link
      data: $data
      contentType: $contentType
    ) {
      _id
      title
      description
      image
      link
    }
  }
`;

export const REMOVE_PHOTO = gql`
    mutation removePhoto($photoId: ID!) {
        removePhoto(photoId: $photoId) {
            _id
        }
    }
    `;


import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        bookCount
        savedBooks
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $author: [String]
    $description: String
    $title: String
    $bookId: Int
    $link: String
  ) {
    saveBook(
      author: $author
      description: $description
      title: $title
      bookId: $bookId
      link: $link
    )
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: Int) {
    removeBook(bookId: $bookId)
  }
`;

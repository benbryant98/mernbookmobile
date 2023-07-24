const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  input saveBookInput {
    author: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookToSave: saveBookInput): User
    removeBook(bookId: String!): User
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;

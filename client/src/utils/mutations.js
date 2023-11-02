import {gql} from "@apollo/client"

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          image
          link
          title
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          image
          link
          title
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation Mutation($newBook: InputBook!) {
    saveBook(newBook: $newBook) {
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
  `;

  export const REMOVED_BOOK = gql`
  mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
  `;
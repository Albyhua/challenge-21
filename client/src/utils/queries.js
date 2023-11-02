import {gql} from "@apollo/client"

export const QUERY_ME = gql`
query Me {
    me {
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


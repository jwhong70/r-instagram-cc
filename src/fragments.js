import { gql } from "@apollo/client";

const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    id
    file
    likes
    commentNumber
    isLiked
  }
`;
const COMMENT_FRAGMENT = gql`
  fragment CommentFragment on Comment {
    id
    user {
      username
      avatar
    }
    payload
    createdAt
  }
`;
export { PHOTO_FRAGMENT, COMMENT_FRAGMENT };

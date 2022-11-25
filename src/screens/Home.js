import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeeds {
    seeFeeds {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

function Home() {
  const { data } = useQuery(FEED_QUERY);
  return (
    <>
      <PageTitle title="Home" />
      {data?.seeFeeds?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </>
  );
}
export default Home;

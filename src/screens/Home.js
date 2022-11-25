import { gql, useQuery } from "@apollo/client";
import Photo from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";

const FEED_QUERY = gql`
  query seeFeeds {
    seeFeeds {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
      createdAt
      isMine
      isLiked
      comments {
        id
        user {
          username
          avatar
        }
        payload
        createdAt
      }
      commentNumber
    }
  }
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

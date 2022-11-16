import { logUserOut } from "../apollo";

function Home() {
  return (
    <>
      <h1>Welcome we did it!</h1>
      <button onClick={() => logUserOut()}>Log out now!</button>
    </>
  );
}
export default Home;

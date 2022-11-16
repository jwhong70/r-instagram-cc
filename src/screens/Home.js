import { logUserOut } from "../apollo";
import routes from "./../routes";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome we did it!</h1>
      <button
        onClick={() => {
          logUserOut();
          navigate(routes.home, { replace: true });
        }}
      >
        Log out now!
      </button>
    </>
  );
}
export default Home;
